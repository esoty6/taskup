import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';

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

  protected cancel = output();
  protected add = output<NewTask>();

  protected onCancel(): void {
    this.cancel.emit();
  }

  protected onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    });
  }
}
