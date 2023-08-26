import connectMogoDB from "@/libs/mongodb"
import Project from "@/models/project"
import { NextResponse } from "next/server"

export async function POST(request){
    console.log(request)
    const {title, description, image, github, website} = await request.json()
    await connectMogoDB()
    await Project.create({title, description, image, github, website})
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
    await Project.findByIdAndDelete(id)
    return NextResponse.json({message: "Project deleted"}, {status: 200})
}