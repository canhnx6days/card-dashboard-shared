import { Route } from '@angular/router';

export const webShellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@car-dashboard-shared/feature-layout').then(
        (m) => m.LayoutComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
