import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { AutoComponent } from './auto/auto.component';
import { GridComponent } from './grid/grid.component';
import { PointerEventsComponent } from './pointer-events/pointer-events.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  {
    path: 'flex',
    component: FlexComponent,
    data: { title: 'Css' }
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
    path: 'position',
    component: PositionComponent
  },
  {
    path: '',
    redirectTo: 'flex',
    pathMatch: 'full'
  }
];

export const CssStyleRoutes = RouterModule.forChild(routes);
