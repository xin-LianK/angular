import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
// import { RouterModule,PreloadAllModules  } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    // RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules })
    AppRoutes,
    SharedModule.forRoot()
  ],
  providers: [],
})
export class AppModule { }
