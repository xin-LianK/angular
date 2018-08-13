import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'css',
    loadChildren: './css-style/css-style.module#CssStyleModule'
  },
  {
    path: 'form',
    loadChildren: './form-test/form-test.module#FormTestModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
