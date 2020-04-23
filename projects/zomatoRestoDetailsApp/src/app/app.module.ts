import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { RestoDetailComponent } from './resto-detail/resto-detail.component';

@NgModule({
  declarations: [
    RestoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[ RestoDetailComponent ]
})
export class AppModule { 
  constructor( private injector : Injector) {
  }

  ngDoBootstrap(){
    const restoDetailsApp = createCustomElement(RestoDetailComponent, { injector : this.injector});
    customElements.define('resto-detail-app', restoDetailsApp)
  }
}
