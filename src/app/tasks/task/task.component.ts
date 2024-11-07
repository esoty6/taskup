import { Component, input, output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  readonly task = input.required<Task>();

  protected completeTask = output<string | number>();

  protected onCompleteTask(): void {
    this.completeTask.emit(this.task().id);
  }
}
