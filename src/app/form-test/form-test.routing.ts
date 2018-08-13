import { Routes, RouterModule } from '@angular/router';
import { Ng2ValidationComponent } from './ng2-validation/ng2-validation.component';

const routes: Routes = [
  {
    path: 'validation',
    component: Ng2ValidationComponent
  },
];

export const FormTestRoutes = RouterModule.forChild(routes);
