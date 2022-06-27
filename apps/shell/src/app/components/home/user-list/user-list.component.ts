import { Component, Input, OnInit } from '@angular/core';
import { UserStoreInterface } from 'libs/shared/store/src/lib/user-store/state/@types/user-store.interface';

@Component({
  selector: 'user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: UserStoreInterface[] = [];

  constructor() {}

  ngOnInit() {}
}
