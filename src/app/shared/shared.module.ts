import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '../../../node_modules/@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  entryComponents: [],
  exports: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
