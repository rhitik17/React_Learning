import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {

    const [todo, setTodo] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(todo);
        setTodo(' ');
    }


    return(

        <form onSubmit={handleSubmit}>
            <input type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new todo"
            />

            <button type="submit">Add</button>

        </form>
    );
}

export default AddTodoForm;