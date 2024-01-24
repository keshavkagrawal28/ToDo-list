import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
      return;
    }
    let todoText = form.value['text'];
    this.dataService.addTodo(new Todo(todoText));
    form.reset();
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(index: number, todo: Todo) {
    console.log('edit clicked', index, todo);
  }

  deleteTodo(index: number) {
    this.dataService.removeTodo(index);
  }
}
