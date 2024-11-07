import { Component } from '@angular/core';
import { MOCK_USERS } from '../../mocks/mock-users';
import { User } from '../../types/user.type';
import { getRandomElement } from '../../utils/utlis';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  protected selectedUser: User;

  constructor() {
    this.selectedUser = getRandomElement(MOCK_USERS);
  }
}
