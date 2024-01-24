import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
