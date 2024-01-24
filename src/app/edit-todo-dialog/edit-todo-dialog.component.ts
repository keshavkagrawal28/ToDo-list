import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, CommonModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
})
export class EditTodoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}
  onFormSubmit(form: NgForm) {
    if (form.invalid) return;
    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };
    this.dialogRef.close(updatedTodo);
  }

  close() {
    this.dialogRef.close();
  }
}
