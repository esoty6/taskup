import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
