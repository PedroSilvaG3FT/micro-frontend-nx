import { Component, Input, OnInit } from '@angular/core';
import { UserStoreInterface } from 'libs/shared/store/src/lib/user-store/state/@types/user-store.interface';

@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() items: any[] = [];

  constructor() {}

  ngOnInit() {}
}
