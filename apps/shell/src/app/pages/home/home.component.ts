import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public selectedUsers = this.userFacade.selectedUsers$;

  constructor(private userFacade: UserFacade) {}

  ngOnInit() {}
}
