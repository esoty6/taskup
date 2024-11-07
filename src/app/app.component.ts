import { Component } from '@angular/core';
import { MOCK_USERS } from '../mocks/mock-users';
import { User } from '../types/user.type';
import { getRandomElement } from '../utils/utlis';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected user: User = getRandomElement(MOCK_USERS);
}
