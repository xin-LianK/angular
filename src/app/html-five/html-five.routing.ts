import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: { title: 'Html5' }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  }
];

export const HtmlFiveRoutes = RouterModule.forChild(routes);
