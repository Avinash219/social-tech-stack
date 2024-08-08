import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@client/auth/feature').then((m) => m.AuthFeatureModule),
  },
];
