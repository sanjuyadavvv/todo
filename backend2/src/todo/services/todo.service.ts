import Todo from "../models/todo.model.js";
import {ITodo} from "../models/todo.model.js"

export const createTodo = async (data: Partial<ITodo>) => {
    console.log('data sent is ',data)
  return await Todo.create(data);
};


// update 
export const updateTodo=async(id:string,data:Partial<ITodo>)=>{

     const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

return updatedTodo

}


export const getAllTodo=async()=>{
    const alltodos=await Todo.find()
    return alltodos
}


export const deleteTodo=async(id:string)=>{
 const deletedTodo=await    Todo.findByIdAndDelete(id)
return deletedTodo
}