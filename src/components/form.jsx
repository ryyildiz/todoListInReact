import React from "react";
import {useState} from "react";

function Form({inputText, setInputText, todos, setTodos}) {

    const [alertWarning, setAlertWarning] = useState('');
    const [alertSuccess, setAlertSuccess] = useState('');

    const inputValue = (e) => {
        setInputText(e.target.value)
    }

    const submitTextValue = (e) => {
        e.preventDefault()
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }

        setInputText("")
    }

    return(
        <form>
            <div className="search">
                <input type="text" className="todo-input" placeholder="Add"
                value={inputText} onChange={inputValue}/>
                <button className="todo-button" type="submit" onClick={submitTextValue}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="alert-wrapper">
                    {alertWarning ? <div className="alert-warning">
                        <div>Input field cannot be empty!</div>
                    </div> : ""}
                    {alertSuccess ? <div className="alert-success">
                        <div> ToDo add is success!</div>
                    </div> : ""}
                </div>
            </div>
        </form>
    )
}

export default Form
