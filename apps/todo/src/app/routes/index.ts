import { Route } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

export default [
  {
    path: '',
    title: 'Todo',
    component: HomeComponent,
  },
] as Route[];
