import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
})
export class UserComponent implements OnInit {
  public users = [
    { name: 'John', email: 'john@test.com' },
    { name: 'Snow', email: 'snow@test.com' },
  ];
  constructor() {}

  ngOnInit() {}
}
