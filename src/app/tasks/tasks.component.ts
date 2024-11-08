import { Component, computed, input, signal } from '@angular/core';
import { MOCK_TASKS } from '../../mocks/mock-tasks';
import { type User } from '../user-list/user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { type NewTask, type Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  readonly user = input.required<User>();

  protected isAddingTask = signal<boolean>(false);
  protected tasks = signal<Task[]>(MOCK_TASKS);

  protected userTasks = computed<Task[]>(() =>
    this.tasks().filter((task) => task.userId === this.user().id)
  );

  protected onCompleteTask(taskId: string | number): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  protected onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  protected onCancelAddTask(): void {
    this.isAddingTask.set(false);
  }

  protected onAddTask(newTask: NewTask): void {
    const taskToAdd = {
      ...newTask,
      id: crypto.randomUUID(),
      userId: this.user().id,
    };

    this.tasks.update((tasks) => [taskToAdd, ...tasks]);

    this.isAddingTask.set(false);
  }
}
