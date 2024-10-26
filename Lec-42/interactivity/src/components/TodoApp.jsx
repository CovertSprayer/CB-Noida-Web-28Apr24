import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

    const dummyData = [
        {id: uuid(), text: "Learn React", completed: false},
        {id: uuid(), text: "Go for swimming lession", completed: false},
        {id: uuid(), text: "Learn Nodejs", completed: false},
        {id: uuid(), text: "Learn Tailwind", completed: false},
        {id: uuid(), text: "Buy Some Groceries", completed: false},
    ]

    const [todos, setTodos] = useState(dummyData);

    function addTodo(todo){
        const newTodos = [...todos, todo];
        setTodos(newTodos);

        // setTodos(prevstate => [...prevstate, todo])
    }

    function deleteTodo(todoId){
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    }

    function markTodo(todoId){
        const newTodos = todos.map(todo => {
            if(todo.id === todoId){
                return {...todo, completed: !todo.completed}
            }
            else return todo;
        });

        // const newTodos = todos.map(todo => 
        //     todoId === todo.id ? {...todo, completed: !completed} : todo);

        setTodos(newTodos);
    }


  return (
    <>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos = {todos} deleteTodo={deleteTodo} markTodo={markTodo}/>
    </>
  )
}

export default TodoApp