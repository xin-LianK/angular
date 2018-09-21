import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

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
    loadChildren: './gps/gps.module#GpsModule',
    canLoad: [AuthGuardService]
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
    // 只预加载那些 data.preload 标志为 true 的路由
    data: { preload: true }
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
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
