import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  protected enteredTitle = signal('');
  protected enteredSummary = signal('');
  protected enteredDate = signal('');

  readonly userId = input.required<string | number>();

  protected close = output();

  private tasksService = inject(TasksService);

  protected onClose(): void {
    this.close.emit();
  }

  protected onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        dueDate: this.enteredDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}
