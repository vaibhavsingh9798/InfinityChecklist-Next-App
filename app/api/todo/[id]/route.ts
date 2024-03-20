import Todo from '@/models/todo'
import { NextResponse } from 'next/server'
  
export const PUT = async (request : Request, {params} : {params:{id:String}}) =>{
    
   try{
     const todo = await Todo.findByIdAndUpdate({_id:params.id},{status:true})
     return new NextResponse(JSON.stringify(todo),{status:200})
   }catch(err){
      return new NextResponse("Error during fect"+err,{status:500})
   }
}

export const DELETE = async (request : Request, {params} : {params:{id:String}}) =>{
    
    try{
      const todo = await Todo.findByIdAndDelete({_id:params.id})
      return new NextResponse(JSON.stringify(todo),{status:200})
    }catch(err){
       return new NextResponse("Error during fect"+err,{status:500})
    }
}
 