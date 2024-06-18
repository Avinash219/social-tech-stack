import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@client/auth/feature').then((m) => m.AuthFeatureModule),
  },
];
