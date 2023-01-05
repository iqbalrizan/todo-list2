import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
import {BiTrash} from "react-icons/bi"
import "./index.css"

const Todo = ({text, todos, setTodos, todo}) => {

    const handlerDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }


    const completeHandler = () => {
        setTodos(todos.map(item => {
if(item.id === todo.id ) {
    return{
        ...item, completed : !item.completed,
    }
}
return item ;
        }))
    }
  return (
    <div className={`todo ${todo.completed ? "completed" : null}`}>
        <li className="todo-item" >{text}</li>
            <button className='complete-btn' onClick={completeHandler}>
                <AiFillCheckCircle />
            </button>
            <button className='trash-btn' onClick={handlerDelete}>
                <BiTrash />
            </button>
        
    </div>
  )
}

export default Todo