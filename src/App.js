import './App.css';
import Form from "./components/form";
import React, {useState} from "react";
import TodoList from "./components/todoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

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

        />
        < TodoList
        todos={todos}
        setTodos={setTodos}
        />
    </div>
  );
}

export default App;
