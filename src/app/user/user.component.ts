import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
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
  private selectedUser: WritableSignal<User> = signal<User>(
    getRandomElement(MOCK_USERS)
  );
  protected userName: Signal<string> = computed(() => this.selectedUser().name);
  protected imageSrc: Signal<string> = computed(() =>
    'https://thispersondoesnotexist.com/'.concat(
      '?ts=',
      Date.now().toString(),
      '&user=',
      this.selectedUser().id.toString()
    )
  );

  protected onUserClick(): void {
    this.selectedUser.set(getRandomElement(MOCK_USERS));
  }
}
