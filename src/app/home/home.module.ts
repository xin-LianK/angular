import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [
    HomeComponent,
    IndexComponent
  ]
})
export class HomeModule { }
