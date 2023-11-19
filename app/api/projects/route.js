import connectMogoDB from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse, NextRequest } from "next/server"
import {writeFile, unlink} from 'fs/promises'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import path from 'path'

export async function POST(request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({message: "You dont have access"}, {status: 401})
    }
    // const {title, description, image, github, website} = await request.json()
    const data = await request.formData()
    const title = data.get('title')
    const description = data.get('description')
    const year = data.get('year')
    const image = data.get('image')
    const github = data.get('github')
    const website = data.get('website')

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const imageName = image.name
    const imagePath = path.join(process.cwd(), process.env.UPLOADS_PATH,  imageName)
    await writeFile(imagePath, buffer)

    await connectMogoDB()
    await Project.create({title, description, year, imageName, github, website})
    return NextResponse.json({message: "Project Added"}, {status: 201})
}

export async function GET(){
    await connectMogoDB()
    const projects = await Project.find().sort({year: -1})
    return NextResponse.json({projects})
}

export async function DELETE(request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({message: "You dont have access"}, {status: 401})
    }
    const id = request.nextUrl.searchParams.get("id")
    await connectMogoDB()
    const project = await Project.findById(id)
    if(project){
        try{
        await unlink(path.join(process.cwd(), process.env.UPLOADS_PATH, project.imageName))
        }catch(error){
            console.log("Error deleting image: "+ error)
        }
        await Project.findByIdAndDelete(id)
        return NextResponse.json({message: "Project deleted"}, {status: 200})
    }
    else{
        return NextResponse.json({message: "No project with this id"})
    }
}