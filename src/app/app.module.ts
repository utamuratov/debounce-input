import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDebounceInputModule } from 'ngx-debounce-input';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxDebounceInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
