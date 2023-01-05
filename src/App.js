
import "./index.css"

import {BsFillBookmarkPlusFill} from "react-icons/bs"
import {AiFillCheckCircle} from "react-icons/ai"
import {BiTrash} from "react-icons/bi"
import { useEffect, useState } from 'react';
import Form from "./Form"
import Todolist from "./Todolist";


function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterStatus();
saveLocalTodos();
  }, [todos, status])


  const filterStatus = () => {
    switch(status){
      case "completed":
        setFilterTodos(todos.filter (todo => todo.completed === true));
        break;
        case "uncompleted":
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
          default :
          setFilterTodos(todos)
          break
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

 

 

 
  return (
    <div className="App">
      <header><h1>To-do List</h1></header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
      <Todolist todos={todos} setTodos={setTodos} filterTodos={filterTodos}/>
      </div>
      
      
    
    
  );
}

export default App;
