import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PinComponent } from './pin/pin.component';
import { ScreenComponent } from './screen/screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PinComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      { path: 'enterpassword', component: ScreenComponent },
      { path: '**', redirectTo: '/enterpassword' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
