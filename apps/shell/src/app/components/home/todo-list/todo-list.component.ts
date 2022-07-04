import { Component, Input, OnInit } from '@angular/core';

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
