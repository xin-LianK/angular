import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlFiveComponent } from './html-five.component';
import { HtmlFiveRoutes } from './html-five.routing';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    HtmlFiveRoutes
  ],
  declarations: [
    HtmlFiveComponent,
    IndexComponent
  ]
})
export class HtmlFiveModule { }
