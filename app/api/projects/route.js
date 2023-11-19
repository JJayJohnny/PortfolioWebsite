import connectMogoDB from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { put, del } from '@vercel/blob';

export async function POST(request){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({message: "You dont have access"}, {status: 401})
    }
    const data = await request.formData()
    const title = data.get('title')
    const description = data.get('description')
    const year = data.get('year')
    const image = data.get('image')
    const github = data.get('github')
    const website = data.get('website')

    let imageName = image.name

    const blob = await put(`projectImages/${imageName}`, image, {
        access: 'public'
    })

    imageName = blob.url

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
            await del(project.imageName)
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