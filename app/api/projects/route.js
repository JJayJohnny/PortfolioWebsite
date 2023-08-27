import connectMogoDB from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse, NextRequest } from "next/server"
import {writeFile, unlink} from 'fs/promises'

export async function POST(request){
    // const {title, description, image, github, website} = await request.json()
    const data = await request.formData()
    const title = data.get('title')
    const description = data.get('description')
    const image = data.get('image')
    const github = data.get('github')
    const website = data.get('website')

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const imagePath = '/projectImages/' + image.name
    await writeFile('public'+imagePath, buffer)

    await connectMogoDB()
    await Project.create({title, description, imagePath, github, website})
    return NextResponse.json({message: "Project Added"}, {status: 201})
}

export async function GET(){
    await connectMogoDB()
    const projects = await Project.find()
    return NextResponse.json({projects})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await connectMogoDB()
    const project = await Project.findById(id)
    if(project){
        try{
        await unlink('public'+project.imagePath)
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