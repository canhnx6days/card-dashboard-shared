import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@car-dashboard-shared/web').then((c) => c.WebComponent),
  },
];
