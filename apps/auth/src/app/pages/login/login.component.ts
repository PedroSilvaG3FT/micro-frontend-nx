import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@nx-micro-app/shared/store';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public authForm = { email: '', password: '' };

  constructor(private router: Router, private authFacade: AuthFacade) {}

  ngOnInit() {}

  generateGuid() {
    return 'blablablablablablabla';
  }

  handleSubmit() {
    this.authFacade.setUser(this.authForm);
    this.authFacade.setToken(this.generateGuid());

    this.router.navigate(['/']);
  }
}
