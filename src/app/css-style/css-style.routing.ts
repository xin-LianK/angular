import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { AutoComponent } from './auto/auto.component';
import { GridComponent } from './grid/grid.component';
import { PointerEventsComponent } from './pointer-events/pointer-events.component';

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
    path: 'point',
    component: PointerEventsComponent
  },
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full'
  }
];

export const CssStyleRoutes = RouterModule.forChild(routes);
