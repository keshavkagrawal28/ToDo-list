import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    new Todo('this is a test', true),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore soluta nam repellendus odio nobis eveniet molestiae, facere aut ipsum in ea eligendi adipisci culpa perferendis a iure, repellat dicta at?'
    ),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
