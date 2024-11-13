import { effect, Injectable, signal } from '@angular/core';
import { MOCK_TASKS } from '../../mocks/mock-tasks';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(MOCK_TASKS);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }

    effect(() => {
      this.saveTasks();
    });
  }

  getUserTasks(userId: string | number) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(newTaskData: NewTask, userId: string | number) {
    const newTask = {
      ...newTaskData,
      id: crypto.randomUUID(),
      userId: userId,
    };

    this.tasks.update((tasks) => [newTask, ...tasks]);
  }

  removeTask(taskId: string | number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
