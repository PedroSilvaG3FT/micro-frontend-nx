import { Component, HostListener, OnInit } from '@angular/core';
import { TodoFacade, UserFacade } from '@nx-micro-app/shared/store';
import { UserStoreInterface } from 'libs/shared/store/src/lib/user-store/state/@types/user-store.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  handleKeyDown(event: any) {
    console.log('On Scroll Event', event);
  }
  public todoItems: String[] = [];
  public selectedUsers: UserStoreInterface[] = [];

  constructor(private userFacade: UserFacade, private todoFacade: TodoFacade) {}

  ngOnInit() {
    this.getTodos();
    this.getSelectedUsers();
  }

  getSelectedUsers(): void {
    this.userFacade.selectedUsers$.subscribe(
      (users) => (this.selectedUsers = users)
    );
  }

  getTodos(): void {
    this.todoFacade.selectedTasks$.subscribe(
      (users) => (this.todoItems = users)
    );
  }
}
