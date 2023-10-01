import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericsModule } from './common/generics.module';
import { SessionInterceptor } from './common/interceptors/session-interceptor.interceptor';
import { LoaderInterceptor } from './common/interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericsModule,
    HttpClientModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
