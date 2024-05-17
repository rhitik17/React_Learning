class TodoModel {
    constructor() {
      this.todos = [];
    }
  
    getTodos() {
      return this.todos;
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
  
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
  
  export default new TodoModel();
  