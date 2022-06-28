import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authFacade: AuthFacade) {}

  ngOnInit() {}

  handleLogout() {
    this.authFacade.clear();
    this.router.navigate(['/auth']);
  }
}
