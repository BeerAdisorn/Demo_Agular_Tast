import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnDeleteDirective } from './btn-delete.directive';
import { AboutmeComponent } from './component/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnDeleteDirective,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
