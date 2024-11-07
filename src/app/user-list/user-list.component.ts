import { Component, output, signal } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';
import { UserComponent } from './user/user.component';
import { type User } from './user/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  protected users = signal<User[]>(MOCK_USERS);
  protected selectedUser = signal<User | undefined>(undefined);

  protected select = output<User>();

  protected onUserClick(user: User) {
    this.select.emit(user);
    this.selectedUser.set(user);
  }
}
