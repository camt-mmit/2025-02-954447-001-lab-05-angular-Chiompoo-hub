import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { Profile } from './profile/profile';
import { Friend } from './friend/friend';
import { Status } from './status/status';

export const routes: Routes = [
  {
    path: '',

    redirectTo: 'hello-world',
    pathMatch: 'full',
  },
  { path: 'hello-world', component: HelloWorld },
  {
    path: '',

    redirectTo: 'profile',
    pathMatch: 'full',
  },
  { path: 'profile', component: Profile },
  {
    path: '',

    redirectTo: 'friend',
    pathMatch: 'full',
  },
  { path: 'friend', component: Friend },
  {
    path: '',

    redirectTo: 'status',
    pathMatch: 'full',
  },
  { path: 'status', component: Status },
];
