import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTestComponent } from './form-test.component';
import { Ng2ValidationComponent } from './ng2-validation/ng2-validation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormTestComponent,
    Ng2ValidationComponent
  ]
})
export class FormTestModule { }
