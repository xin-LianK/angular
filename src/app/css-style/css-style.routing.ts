import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { AutoComponent } from './auto/auto.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: 'flex',
    component: FlexComponent
  },
  {
    path: 'auto',
    component: AutoComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full'
  }
];

export const CssStyleRoutes = RouterModule.forChild(routes);
