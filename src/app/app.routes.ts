import { Routes } from '@angular/router';
import { HomePageComponent } from './crm/components/home-page/home-page.component';
import { UserStartComponent } from './crm/components/user-start/user-start.component';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: UserStartComponent },
  { path: 'home', component: HomePageComponent }
];
