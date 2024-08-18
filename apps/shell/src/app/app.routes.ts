import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'projects',
    loadChildren: () =>
      loadRemoteModule('projects', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'messaging',
    loadChildren: () =>
      loadRemoteModule('messaging', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'feed',
    loadChildren: () =>
      loadRemoteModule('feed', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule('profile', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule('auth', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'about',
    loadComponent: () =>
      loadRemoteModule('about', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
