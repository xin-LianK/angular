import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTestComponent } from './form-test.component';
import { Ng2ValidationComponent } from './ng2-validation/ng2-validation.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FormTestRoutes } from './form-test.routing';

@NgModule({
  imports: [
    CommonModule,
    FormTestRoutes,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
  ],
  declarations: [
    FormTestComponent,
    Ng2ValidationComponent
  ]
})
export class FormTestModule { }
