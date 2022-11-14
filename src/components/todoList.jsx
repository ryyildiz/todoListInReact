import React from 'react';
import TodoLine from "./todoLine";

function TodoList({todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoLine
                        text={todo.text}
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
