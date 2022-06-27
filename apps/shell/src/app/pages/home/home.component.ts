import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';
import { UserStoreInterface } from 'libs/shared/store/src/lib/user-store/state/@types/user-store.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todoItems: any[] = ['TEST I', 'TEST II', 'TEST III', 'TEST IV'];
  public selectedUsers: UserStoreInterface[] = [];

  constructor(private userFacade: UserFacade) {}

  ngOnInit() {
    this.getSelectedUsers();
  }

  getSelectedUsers(): void {
    this.userFacade.selectedUsers$.subscribe(
      (users) => (this.selectedUsers = users)
    );
  }
}
