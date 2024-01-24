import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

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

  constructor(private dataService: DataService, private dialog: MatDialog) {}

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
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.dataService.updateTodo(index, res);
      }
    });
  }

  deleteTodo(index: number) {
    this.dataService.removeTodo(index);
  }
}
