import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CanDeactivateGuardService } from '../shared/services/can-deactivate-guard.service';
import { RouteResolverService } from '../shared/services/route-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuardService],
            // resolve: {
            //   crisis: RouteResolverService
            // }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          },
        ]
      }
    ]
  },
];

export const CrisisCenterRoutes = RouterModule.forChild(routes);
