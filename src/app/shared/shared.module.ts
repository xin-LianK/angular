import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  entryComponents: [],
  exports: [],
  providers: [
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
