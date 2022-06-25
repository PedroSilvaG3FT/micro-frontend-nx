import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  public selectedCats = this.userFacade.selectedUsers$;
  public users = [
    { name: 'John', email: 'john@test.com' },
    { name: 'Snow', email: 'snow@test.com' },
  ];

  constructor(private userFacade: UserFacade) {}

  get buttonLabel(): (email: string) => string {
    return (email) =>
      this.userFacade.isCatSelected(email) ? 'Remove from Home' : 'Add to Home';
  }

  ngOnInit() {
    this.selectedCats.subscribe((response) => {
      console.log(response);
    });
  }

  toggleSelect(user: any) {
    this.userFacade.toggleSelectUser(user);

    this.selectedCats.subscribe((response) => {
      console.log(response);
    });
  }
  isSelected(email: any) {
    return this.userFacade.isCatSelected(email);
  }
}
