import { Component, output, signal } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';
import { User } from '../../types/user.types';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  protected users = signal<User[]>(MOCK_USERS);

  protected select = output<User>();

  protected onUserClick(user: User) {
    this.select.emit(user);
  }
}
