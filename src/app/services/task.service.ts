import { Injectable } from '@angular/core';
import { Task } from '../Interfaces/interface';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private todos: Task[]; // Array to store todos

  // Constructor of the class
  constructor() {
    const storedTodos = localStorage.getItem('todos'); // Get stored todos from localStorage
    this.todos = storedTodos ? JSON.parse(storedTodos) : []; // If there are stored todos, parse and assign them to the this.todos property; otherwise, assign an empty array
  }

  // Save todos to localStorage
  private saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Generate a new ID for a todo
  private generateId(): number {
    const lastTodo = this.todos[this.todos.length - 1];
    return lastTodo ? lastTodo.id + 1 : 1;
  }

  // Get a todo by its ID
  getTodoById(id: number): Task | undefined {
    return this.todos.find(todo => todo.id == id);
  }

  // Add a new todo
  addTodo(todo: Task) {
    todo.id = this.generateId();
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  // Update an existing todo
  updateTodo(todo: Task) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
      this.saveToLocalStorage();
    }
  }

  // Update the completion status of a todo
  updateTodoMark(todo: Task) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      this.todos[index].completed = todo.completed;
      this.saveToLocalStorage();
    }
  }

  // Delete a todo by its ID
  deleteTodo(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  // Get all todos
  getTodos(): Task[] {
    return this.todos;
  }
}