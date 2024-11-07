import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserListComponent } from './user-list/user-list.component';
import { type User } from './user-list/user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected user = signal<User | null>(null);

  protected onUserClick(user: User): void {
    this.user.set(user);
  }
}
