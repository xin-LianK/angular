import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: { title: 'Home' }
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
