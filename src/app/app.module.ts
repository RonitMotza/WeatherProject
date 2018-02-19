import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {  FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather.component'


@NgModule({
  imports:      [ BrowserModule , FormsModule,HttpModule],
  declarations: [ AppComponent,WeatherComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
