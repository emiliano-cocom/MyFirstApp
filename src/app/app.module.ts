import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumarComponent } from './sumar/sumar.component';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AlertComponent } from './alert/alert.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    SumarComponent,
    ChronometerComponent,
    CalculatorComponent,
    AlertComponent,
    FormComponent,
    ListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
