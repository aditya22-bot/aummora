import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './aumora-dashbord/headers/headers';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./aumora-dashbord/headers/headers').then(m => m.HeadersComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about').then(m => m.About)
  }
];