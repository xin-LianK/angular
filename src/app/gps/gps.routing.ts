import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GpsComponent } from './gps.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {
    path: '',
    component: GpsComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent,
        data: { title: '首页' }
      },
      {
        path: 'one',
        component: OneComponent,
        data: { title: '第一个页面' }
      },
      {
        path: 'two/:id',
        component: TwoComponent,
        data: { title: '直接路由传参' }
      },
      {
        path: 'three',
        component: ThreeComponent,
        data: { title: '路由对象传参' }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
      }
    ]
  },
];

export const GpsRoutes = RouterModule.forChild(routes);
