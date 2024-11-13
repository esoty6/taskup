import { Component, computed, inject, input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { UserListService } from '../user-list.service';
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

  protected userName = computed(() => this.user().name);
  protected imageSrc = computed(() =>
    'assets/users/'.concat(this.user().avatar)
  );

  private userListService = inject(UserListService);

  protected onUserClick(): void {
    this.userListService.setUser(this.user());
  }

  protected isActive(): boolean {
    return this.user().id === this.userListService.getSelectedUser()()?.id;
  }
}
