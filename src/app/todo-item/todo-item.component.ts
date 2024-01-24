import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TooltipDirective } from '../shared/tooltip.directive';
import { TooltipSingletonDirective } from '../shared/tooltip-singleton.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, TooltipDirective, TooltipSingletonDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('editBtn') editBtnElementRef!: ElementRef<HTMLElement>;

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
