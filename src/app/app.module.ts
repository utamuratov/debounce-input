import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDebounceInputDirective } from 'ngx-debounce-input';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxDebounceInputDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
