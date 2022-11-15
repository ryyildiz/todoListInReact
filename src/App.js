import './App.css';
import Form from "./components/form";
import React, { useState, useEffect } from 'react'
import TodoList from "./components/todoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState("all");
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler(todos);
        saveLocalTodos();
    }, [todos, status]) //eslint-disable-line



    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    //! save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            setTodos(JSON.parse(localStorage.getItem("todos")))
        }
    }


    return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
        <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
        />
        < TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
