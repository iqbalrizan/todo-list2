import React from 'react'
import Todo from "./Todo"
import "./index.css"

const Todolist = ({todos, setTodos, filterTodos}) => {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {filterTodos.map((todo) => 
            <Todo text={todo.text} key={todo.id} setTodos={setTodos} todos={todos} todo={todo}/>
            )}
            
        </ul>
    </div>
  )
}

export default Todolist