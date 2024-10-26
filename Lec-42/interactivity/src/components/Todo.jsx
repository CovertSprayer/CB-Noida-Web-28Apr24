import React from 'react'
import { FaTrash } from "react-icons/fa";

const Todo = ({todo, deleteTodo, markTodo}) => {

  return (
    <div>
        <span><input type="checkbox" defaultChecked={todo.completed} onChange={() => markTodo(todo.id)} /></span>
        <span style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.text}</span>
        <span onClick={() => deleteTodo(todo.id)}><FaTrash /></span>
    </div>
  )
}

export default Todo