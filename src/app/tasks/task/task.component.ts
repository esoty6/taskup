import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { TasksService } from '../tasks.service';
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

  private tasksService = inject(TasksService);

  protected onCompleteTask(): void {
    this.tasksService.removeTask(this.task().id);
  }
}
