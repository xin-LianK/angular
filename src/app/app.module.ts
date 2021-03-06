import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgtUniversalModule } from '@ng-toolkit/universal';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';

// import { RouterModule,PreloadAllModules  } from '@angular/router';
import { TipService } from './shared/services/tip.service';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { XHRBackend, RequestOptions, Http, HttpModule } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
  const service = new HttpInterceptorService(xhrBackend, requestOptions);
  return service;
}
// 使用TranslateHttpLoader加载项目的本地语言json配置文件
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutes,
    HttpClientModule, // HttpClient必须引用的模块
    HttpModule,  // XHRBackend必须引用的模块
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClient必须引用的模块\r\nHttpModule,
    // XHRBackend必须引用的模块\r\nBrowserAnimationsModule,
    SharedModule.forRoot(),
    // 调用forRoot静态方法指定加载的文件
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    // 调用forRoot静态方法指定加载的文件\r\nTranslateModule.forRoot(\r\nloader
  ],
  providers: [
    TipService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService, // 自定义拦截器的类名
      multi: true, // Angular 这个 HTTP_INTERCEPTORS表示的是一个数组，而不是单个的值。
    },
    // 全局处理非正确的response
    // HttpInterceptorService,
    // {
    //   provide: Http,
    //   useFactory: interceptorFactory,
    //   deps: [XHRBackend, RequestOptions]
    // }
  ],
})
export class AppModule {
  constructor(router: Router) {
    router.events.subscribe(re => {
      if (re instanceof NavigationEnd) {
      }
    });
  }
}
