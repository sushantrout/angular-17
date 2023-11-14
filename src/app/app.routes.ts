import { Routes } from '@angular/router';

export const routes: Routes = [
  //genearte lazy routes
  {
    path: 'angular-17',
    loadChildren: () => import('./master-component/angular17/angular17.module').then(m => m.Angular17Module)
  },
  {
    path: 'angular-16',
    loadChildren: () => import('./master-component/angular16/angular16.module').then(m => m.Angular16Module)
  },
  {
    path: 'angular-15',
    loadChildren: () => import('./master-component/angular15/angular15.module').then(m => m.Angular15Module)
  },
  {
    path: 'angular-14',
    loadChildren: () => import('./master-component/angular14/angular14.module').then(m => m.Angular14Module)
  },
  {
    path: 'angular-13',
    loadChildren: () => import('./master-component/angular13/angular13.module').then(m => m.Angular13Module)
  },
  {
    path: 'angular-12',
    loadChildren: () => import('./master-component/angular12/angular12.module').then(m => m.Angular12Module)
  },
  {
    path: 'angular-11',
    loadChildren: () => import('./master-component/angular11/angular11.module').then(m => m.Angular11Module)
  },
  {
    path: 'angular-10',
    loadChildren: () => import('./master-component/angular10/angular10.module').then(m => m.Angular10Module)
  },
  {
    path: 'angular-9',
    loadChildren: () => import('./master-component/angular9/angular9.module').then(m => m.Angular9Module)
  },
  {
    path: 'angular-8',
    loadChildren: () => import('./master-component/angular8/angular8.module').then(m => m.Angular8Module)
  }
];
