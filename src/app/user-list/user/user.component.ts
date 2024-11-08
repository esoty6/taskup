import { Component, computed, input, output } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  readonly user = input.required<User>();
  readonly active = input.required<boolean>();

  protected select = output<User>();

  protected userName = computed(() => this.user().name);
  protected imageSrc = computed(() =>
    'assets/users/'.concat(this.user().avatar)
  );

  protected onUserClick(): void {
    this.select.emit(this.user());
  }
}
