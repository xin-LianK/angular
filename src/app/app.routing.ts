import { Routes, RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

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
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  {
    path: 'compose',
    component: ComposeMessageComponent
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
