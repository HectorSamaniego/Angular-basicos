import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorcomponet } from './contador/contador.componet';
import { Heroesmodule } from './Heroes/Heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    contadorcomponet
    
  ],
  imports: [
    BrowserModule,
    Heroesmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
