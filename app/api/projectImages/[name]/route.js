import { NextResponse } from "next/server";
import {readFile} from 'fs/promises'

export async function GET(request, context){
    try{
        const data = await readFile(process.env.UPLOADS_PATH+context.params.name)
        const response = new NextResponse(data, {
            status: 200,
            headers: {
                'content-type': 'image'
            }
        })
        return response
    }catch(e){
        return NextResponse.json({message: "No such file"})
    }
    
}