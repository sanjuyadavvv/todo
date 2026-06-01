import { createTodo,updateTodo,deleteTodo,getAllTodo } from "../services/todo.service.js"
import { ITodo } from "../models/todo.model.js"


import { Request,Response } from "express"

export const createTodoController=async(req:Request,res:Response)=>{
    try {

        console.log(req.body)
        const todo=await createTodo(req.body)
        return res.status(201).json({message:"todo created successfully",todo})

    } catch (error) {
        return res.status(500).json({message:"failed to create todo",error})
    }

}


export const updateTodoController=async(req:Request,res:Response)=>{
try {
    const id=req.params.id as string
 const updatedTodo = await updateTodo(
      id,
      req.body
    );
return res.status(200).json({messge:"todo updated "})
} 
catch (error) {
      return res.status(500).json({
      message: "Failed to update todo",
      error,
    });
}
}


export const getall=async(req:Request,res:Response)=>{
try {
    const todos=await getAllTodo()
    return res.status(200).json({message:"fetched all",todos})
} catch (error) {
     return res.status(500).json({
      message: "Failed to update todo",
      error,
    });
}
}


export const deleteTodoController=async(req:Request,res:Response)=>{
try {
    const id=req.params.id as string
    const deleted= await  deleteTodo(id)
    return res.status(200).json({message:"deleted"})
} catch (error) {
     return res.status(500).json({
      message: "Failed to update todo",
      error,
    });
}
}