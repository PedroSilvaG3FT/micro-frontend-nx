import { Routes } from '@angular/router';
import { AuthGuard } from 'libs/shared/guards/auth.guard';
import { HomeComponent } from '../pages/home/home.component';

export default [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
  },
] as Routes;
