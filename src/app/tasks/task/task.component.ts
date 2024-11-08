import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
