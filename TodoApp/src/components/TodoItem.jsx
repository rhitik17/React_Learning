import React from "react";

const TodoItem = ({ todo, onRemove }) => (
    <li>
        {todo} <button onClick={onRemove}> Remove</button>
    </li>
);

export default TodoItem;