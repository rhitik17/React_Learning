import { useState, useEffect } from 'react';
import TodoModel from '../models/TodoModel';

const useTodoViewModel = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(TodoModel.getTodos());
    }, []);

    const addTodo = (todo) =>{
        TodoModel.addTodo(todo);
        setTodos([...TodoModel.getTodos()]);
    };


const removeTodo = (index) => {
    TodoModel.removeTodo(index);
    setTodos([...TodoModel.getTodos()]);
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
};

export default useTodoViewModel;