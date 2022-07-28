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
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { ListProductsComponent } from './cash_register/list-products/list-products.component';
import { CommandComponent } from './cash_register/command/command.component';
import { UnderlineDirective } from './directives/underline.directive';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ProjectsComponent } from './components/employees/projects/projects.component';
import { CurriculumComponent } from './components/employees/curriculum/curriculum.component';
import { ExperienciesComponent } from './components/employees/experiencies/experiencies.component';
import { CashRegisterComponent } from './cash_register/cash_register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonComponent } from './person/person.component';

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
    MainComponent,
    SemaforoComponent,
    BuclesComponent,
    SwitchComponent,
    ListProductsComponent,
    CommandComponent,
    UnderlineDirective,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    EmployeeDetailComponent,
    ProjectsComponent,
    CurriculumComponent,
    ExperienciesComponent,
    CashRegisterComponent,
    NavbarComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
