import React from 'react';

function TodoLine({text, todos, setTodos, todo}) {
    const deleteFunction = () => {
        setTodos(todos.filter((x) => x.id !== todo.id))
    }

    const completeFunction = () => {
        setTodos(todos.map((value) => {
            if (value.id === todo.id) {
                return {
                    ...value,
                    completed: !value.completed
                }
            }
            return value;
        }))
    }
    return (
        <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <button className="complete-btn" onClick={completeFunction}>
                <i className="fas fa-check-circle"></i>
            </button>
            <li className="todo-item">{text}</li>
            <button className="trash-btn" onClick={deleteFunction}>
                <i className="fa fa-minus-circle"></i>
            </button>
        </div>
    )
}


export default TodoLine;
