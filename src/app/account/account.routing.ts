import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AccountComponent } from './account.component';
import { MangementComponent } from './mangement/mangement.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [{
      // 而是在使用无组件路由。
      // 一个无组件的路由能让守卫子路由变得更容易。
      path: '',
      children: [
        {
          path: 'index',
          component: IndexComponent
        },
        {
          path: '',
          component: MangementComponent
        },
      ]
    }]

  }

];

export const AccountRoutes = RouterModule.forChild(routes);
