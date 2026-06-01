import React, { useEffect, useState } from "react";
import './TodoPage.css'
import type {
  Todo,
  CreateTodoPayload,
} from "../types/types";

import {
  createTodo,
  getAll,
  deleteTodo,
} from "./services/todo.service";

const TodoPage = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const handleAddTodo = async () => {

    if (
      title.trim() !== "" &&
      description.trim() !== ""
    ) {

      const newTodo: CreateTodoPayload = {
        title,
        description,
        completed: false,
      };
  console.log(newTodo)
      const res = await createTodo(newTodo);

      setTodos([...todos, res.todo]);

      setTitle("");

      setDescription("");
    }
  };

  const handleDelete = async (
    id: string
  ) => {

    await deleteTodo(id);
    const res = await getAll();
    setTodos(res.todos);
  };

  const fetchAll = async () => {

    const res = await getAll();
    console.log('res of fetch all is ',res)
    setTodos(res.todos);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
  <div className="todo-container">

  <div className="todo-card">

    <h1 className="todo-title">
      Todo App
    </h1>

    <input
      className="todo-input"
      type="text"
      placeholder="Enter title"
      value={title}
      onChange={(e) =>
        setTitle(e.target.value)
      }
    />

    <textarea
      className="todo-textarea"
      placeholder="Enter description"
      value={description}
      onChange={(e) =>
        setDescription(e.target.value)
      }
    />

    <button
      className="add-btn"
      onClick={handleAddTodo}
    >
      Add Todo
    </button>

    <ul className="todo-list">

      {todos.length > 0 ? (
  todos.map((todo) => {

    if (!todo) return null;

    return (
      <li
        className="todo-item"
        key={todo._id}
      >

        <div className="todo-content">

          <h3>{todo.title}</h3>

          <p>{todo.description}</p>

        </div>

        <button
          className="delete-btn"
          onClick={() =>
            handleDelete(todo._id)
          }
        >
          🗑️
        </button>

      </li>
    );
  })
) : (
  <p className="empty-text">
    No todos found
  </p>
)}

    </ul>

  </div>

</div>
  );
};

export default TodoPage;