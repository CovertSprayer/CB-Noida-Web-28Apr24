import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, markTodo}) => {
  return (
    <div>
        {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} markTodo={markTodo}/>)}
    </div>
  )
}

export default TodoList