import { Injectable, signal } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';
import { type User } from './user/user.model';

@Injectable({ providedIn: 'root' })
export class UserListService {
  private users = signal<User[]>(MOCK_USERS);
  private selectedUser = signal<User | null>(null);

  getSelectedUser() {
    return this.selectedUser;
  }

  setUser(user: User) {
    this.selectedUser.set(user);
  }

  getAllUsers() {
    return this.users();
  }
}
