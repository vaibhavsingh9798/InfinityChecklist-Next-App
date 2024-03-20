
import Todo from '@/models/todo';
import  connectToDB from '@/config/db'
import { NextResponse } from 'next/server'
  
export const GET = async (request : Request) =>{
   try{
     await  connectToDB()
     const todos = await Todo.find()
     return new NextResponse(JSON.stringify(todos),{status:200})
   }catch(err){
      return new NextResponse("Error during fect"+err,{status:500})
   }
}

export async function  POST(requset : Request){
   try{
    let  todo = await requset.json()
    let response = await Todo.create(todo)
    return new Response(JSON.stringify(response),{status:201})
   }catch(err){
    return new Response("Internal server error",{status:500})   
   }
}
    
