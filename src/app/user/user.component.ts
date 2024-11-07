import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { User } from '../../types/user.type';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  readonly user: InputSignal<User> = input.required<User>();

  protected userName: Signal<string> = computed(() => this.user().name);
  protected imageSrc: Signal<string> = computed(() =>
    'https://thispersondoesnotexist.com/'.concat(
      '?ts=',
      Date.now().toString(),
      '&user=',
      this.user().id.toString()
    )
  );

  protected onUserClick(): void {}
}
