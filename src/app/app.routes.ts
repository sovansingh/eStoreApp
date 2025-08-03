import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { ProductGalleryComponent } from './components/home/product-gallery.component/product-gallery.component';

export const routes: Routes = [
  // { path: 'home', component: Home },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    children: [
      {
        path: 'products',
        component: ProductGalleryComponent,
      },
    ],
  },

  { path: '', redirectTo: '/home/products', pathMatch: 'full' },
  { path: '**', component: NotFound },
];
