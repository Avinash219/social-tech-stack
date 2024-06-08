import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'projects',
    loadChildren: () => import('projects/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'messaging',
    loadChildren: () => import('messaging/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'feed',
    loadChildren: () => import('feed/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'profile',
    loadChildren: () => import('profile/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
