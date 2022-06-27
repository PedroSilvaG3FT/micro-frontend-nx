import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';
import { interval, lastValueFrom, map, take } from 'rxjs';

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

  ngOnInit() {
    this.buttonLabel(this.users[0].email);
  }

  toggleSelect(user: any) {
    this.userFacade.toggleSelectUser(user);
  }
  async buttonLabel(email: string) {
    console.log('START :', email);
    const result$ = this.userFacade.hasUser(email);
    const teste = await lastValueFrom(result$);

    console.log('OOOOOOOPA', teste);
  }

  isSelected(email: any) {
    return this.userFacade.hasUser(email);
  }
}
