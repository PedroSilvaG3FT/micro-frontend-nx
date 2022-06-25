import { Component } from '@angular/core';
import { UserFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'nx-micro-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
  constructor(private userFacade: UserFacade) {}

  ngOnInit() {
    this.userFacade.init();
  }
}
