import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account.component';
import { MangementComponent } from './mangement/mangement.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    // canActivate: [AuthGuardService],
    children: [{
      // 而是在使用无组件路由。
      // 一个无组件的路由能让守卫子路由变得更容易。
      path: '',
      // canActivateChild: [AuthGuardService],
      children: [
        {
          path: '',
          component: MangementComponent
        },
        {
          path: 'index',
          component: IndexComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
      ]
    }]

  }

];

export const AccountRoutes = RouterModule.forChild(routes);
