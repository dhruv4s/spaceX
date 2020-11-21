import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerTransferStateModule } from '@angular/platform-server' 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './serverstate.interceptor';

@NgModule({
  imports: [
    AppModule,
    ServerModule,ServerTransferStateModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerStateInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
