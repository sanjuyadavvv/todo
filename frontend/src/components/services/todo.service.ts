const API =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:3000`
console.log('api url is ',API)
import  type { Todo } from "../../types/types";
import type { CreateTodoPayload } from "../../types/types";

export const createTodo = async (
  todo:  CreateTodoPayload 
) => {

  const response = await fetch(
    `${API}/todo/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );

  return await response.json();
};


export const updateTodo = async (
  id: string,
  data: Partial<Todo>
) => {

  const response = await fetch(
    `${API}/todo/update/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  return await response.json();

}


export const deleteTodo =async(id:string)=>{
const response = await fetch(
    `${API}/todo/delete/${id}`,
    {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();

}

export const getAll=async()=>{
    const response=await fetch(
        `${API}/todo/get`,{
            method:"GET"
        }
    )
 console.log(response)
    return await response.json()
}
