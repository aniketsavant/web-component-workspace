import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RestoListServiceService } from './services/resto-list-service.service';

@NgModule({
  declarations: [
    RestoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ RestoListServiceService ],
  bootstrap: [ ],
  entryComponents:[ RestoListComponent ]
})
export class AppModule { 
  constructor(private injector : Injector) {
  }

  ngDoBootstrap() {
    const restoListApp = createCustomElement(RestoListComponent, { injector: this.injector });
    customElements.define('resto-list-app', restoListApp);
  }
}
