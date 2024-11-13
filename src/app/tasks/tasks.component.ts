import { Component, computed, inject, signal } from '@angular/core';
import { UserListService } from '../user-list/user-list.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { type Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  protected isAddingTask = signal<boolean>(false);

  private tasksService = inject(TasksService);
  private userListService = inject(UserListService);

  protected selectedUser = this.userListService.getSelectedUser();

  protected userTasks = computed<Task[]>(() => {
    const userId = this.selectedUser()?.id;
    return userId ? this.tasksService.getUserTasks(userId) : [];
  });

  protected onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  protected onClose(): void {
    this.isAddingTask.set(false);
  }
}
