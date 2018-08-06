import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssStyleComponent } from './css-style.component';
import { CssStyleRoutes } from './css-style.routing';
import { FlexComponent } from './flex/flex.component';
import { AutoComponent } from './auto/auto.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    CssStyleRoutes
  ],
  declarations: [
    CssStyleComponent,
    FlexComponent,
    AutoComponent,
    GridComponent
  ]
})
export class CssStyleModule { }
