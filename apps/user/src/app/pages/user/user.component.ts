import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';
import { UserStoreInterface } from 'libs/shared/store/src/lib/user-store/state/@types/user-store.interface';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  public selectedUsers: UserStoreInterface[] = [];
  public users = [
    { name: 'John', email: 'john@test.com' },
    { name: 'Snow', email: 'snow@test.com' },
  ];

  constructor(private userFacade: UserFacade) {}

  get isSelected(): (email: string) => boolean {
    return (email) => this.selectedUsers.some((user) => user.email === email);
  }

  get buttonLabel(): (email: string) => string {
    return (email) =>
      this.isSelected(email) ? 'Remove from home' : 'Add to Home';
  }

  ngOnInit(): void {
    this.getSelectedUsers();
  }

  getSelectedUsers(): void {
    this.userFacade.selectedUsers$.subscribe(
      (users) => (this.selectedUsers = users)
    );
  }

  handleAction(user: any): void {
    const hasUser = this.isSelected(user.email);

    if (!hasUser) this.userFacade.addUser(user);
    else this.userFacade.removeUser(user);
  }
}
