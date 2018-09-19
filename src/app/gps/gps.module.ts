import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpsComponent } from './gps.component';
import { GpsRoutes } from './gps.routing';
import { IndexComponent } from './index/index.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  imports: [
    CommonModule,
    GpsRoutes
  ],
  declarations: [
    GpsComponent,
    IndexComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class GpsModule { }
