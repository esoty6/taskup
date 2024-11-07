import { Component, input } from '@angular/core';
import { Task } from '../../types/task.types';
import { User } from '../../types/user.types';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  readonly user = input.required<User>();

  protected tasks: Task[] = [];

  protected addTask(): void {}
}
