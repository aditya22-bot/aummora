import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './aumora-dashbord/headers/headers';
import { About } from './about/about';
import { CategoryDetails } from './product-categories/category-details/category-details';

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
  },
   {
    path: 'contact-us',
    loadComponent: () =>
      import('./contact-us/contact-us').then(m => m.ContactUs)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./product-categories/product-categories').then(m => m.ProductCategories)
  },
  {
    path: 'careers',
    loadComponent: () =>
      import('./career/career').then(m => m.Career)
  },
  { path: 'category/:id', component: CategoryDetails },
  {
    path: 'csr',
    loadComponent: () =>
      import('./crs-page/crs-page').then(m => m.CrsPage)
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./services/services').then(m => m.Services)
  },
  {
    path: 'supplier-chain',
    loadComponent: () =>
      import('./supplier-chain/supplier-chain').then(m => m.SupplierChain)
  },

];