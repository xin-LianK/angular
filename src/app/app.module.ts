import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgtUniversalModule } from '@ng-toolkit/universal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';

// import { RouterModule,PreloadAllModules  } from '@angular/router';
import { AccountComponent } from './account/account.component';

// 使用TranslateHttpLoader加载项目的本地语言json配置文件
function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutes,
    HttpClientModule,
    SharedModule.forRoot(),
    // 调用forRoot静态方法指定加载的文件
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
  ],
})
export class AppModule { }
