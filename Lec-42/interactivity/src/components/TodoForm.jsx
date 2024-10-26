import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  function clickHandler(){
    addTodo({
        id: uuid(),
        text: todo,
        completed: false
    })
    setTodo("");
  }

  return (
    <div>
        <input type="text" onChange={(e) => {
            setTodo(e.target.value)
        }} value={todo}/>
        <button onClick={clickHandler}>Add todo</button>
    </div>
  )
}

export default TodoForm