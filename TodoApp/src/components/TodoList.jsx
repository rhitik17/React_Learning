import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos, onRemoveTodo }) => (

    <ul>
        {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} onRemove={() => onRemoveTodo(index)} />
        ))}
    </ul>
    );

export default TodoList;