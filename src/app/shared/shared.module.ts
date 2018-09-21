import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { RouteResolverService } from './services/route-resolver.service';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

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
    CanDeactivateGuardService,
    RouteResolverService,
    SelectivePreloadingStrategyService
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
