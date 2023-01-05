import React from 'react'
import {BsFillBookmarkPlusFill} from "react-icons/bs"
import "./index.css"

const Form = ( {setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
      }
     const buttonHandlerSubmit = (e) => {
      e.preventDefault()
      setTodos([...todos, {text : inputText, completed : false, id : Math.random() * 1000}])
      setInputText("")
     }

     const statusHandler = (e) => {
        setStatus(e.target.value)
     }
  return (
    <form>
        <input type="text" placeholder='..........' className='todo-input' onChange={inputTextHandler} value={inputText}/>
        <button className='todo-button' type='submit' onClick={buttonHandlerSubmit}>
        <BsFillBookmarkPlusFill className='icon-btn' />
        </button>
        <div className="select">
          <select name="todos" className='filter-todo' onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  )
}

export default Form