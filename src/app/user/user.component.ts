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
  private selectedUser: User;

  constructor() {
    this.selectedUser = getRandomElement(MOCK_USERS);
  }

  get userName(): string {
    return this.selectedUser.name;
  }

  get imageSrc(): string {
    return 'https://thispersondoesnotexist.com/'.concat(
      '?ts=',
      Date.now().toString()
    );
  }

  protected onUserClick(): void {
    this.selectedUser = getRandomElement(MOCK_USERS);
  }
}
