import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './aumora-dashbord/headers/headers';
import { About } from './about/about';

export const routes: Routes = [
     { path: '', component: HeadersComponent },
  { path: 'about', component: About }
];
imports: [RouterModule.forRoot(routes)]
exports: [RouterModule]
