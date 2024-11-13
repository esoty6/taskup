import { Component, inject } from '@angular/core';
import { UserListService } from './user-list.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  private userListService = inject(UserListService);
  protected users = this.userListService.getAllUsers();
}
