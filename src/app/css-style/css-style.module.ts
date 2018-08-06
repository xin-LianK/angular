import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssStyleComponent } from './css-style.component';
import { CssStyleRoutes } from './css-style.routing';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  imports: [
    CommonModule,
    CssStyleRoutes
  ],
  declarations: [
    CssStyleComponent,
    FlexComponent
  ]
})
export class CssStyleModule { }
