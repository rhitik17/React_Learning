import React, { useState, useEffect } from "react";

const AddTodoForm = ({ onAddTodo }) => {

    const [todo, setTodo] = useState(' ');

    useEffect(()=>{
        setTimeout(()=> console.log("hello"));
    })

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