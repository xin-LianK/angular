import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
  {
    path: 'flex',
    component: FlexComponent
  },
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full'
  }
];

export const CssStyleRoutes = RouterModule.forChild(routes);
