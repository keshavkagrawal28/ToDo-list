import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
}
