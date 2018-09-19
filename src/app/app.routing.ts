import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 这种模式属于路由懒加载
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'css',
    loadChildren: './css-style/css-style.module#CssStyleModule',
  },
  {
    path: 'html5',
    loadChildren: './html-five/html-five.module#HtmlFiveModule',
  },
  {
    path: 'gps',
    loadChildren: './gps/gps.module#GpsModule'
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
