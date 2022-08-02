import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './pages/saludo/saludo.component';
import { PadreComponent } from './pages/padre/padre.component';
import { Hijo1Component } from './pages/hijo1/hijo1.component';
import { Hijo2Component } from './pages/hijo2/hijo2.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { SumarComponent } from './pages/sumar/sumar.component';
import { ChronometerComponent } from './pages/chronometer/chronometer.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AlertComponent } from './pages/alert/alert.component';
import { FormComponent } from './pages/components/form/form.component';
import { ListComponent } from './pages/components/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { SemaforoComponent } from './pages/semaforo/semaforo.component';
import { BuclesComponent } from './pages/bucles/bucles.component';
import { SwitchComponent } from './pages/switch/switch.component';
import { ListProductsComponent } from './pages/cash_register/list-products/list-products.component';
import { CommandComponent } from './pages/cash_register/command/command.component';
import { UnderlineDirective } from './directives/underline.directive';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './pages/components/info/info.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { EmployeeDetailComponent } from './pages/components/employee-detail/employee-detail.component';
import { ProjectsComponent } from './pages/components/employees/projects/projects.component';
import { CurriculumComponent } from './pages/components/employees/curriculum/curriculum.component';
import { ExperienciesComponent } from './pages/components/employees/experiencies/experiencies.component';
import { CashRegisterComponent } from './pages/cash_register/cash_register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PersonComponent } from './pages/person/person.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ListaEscritoresComponent } from './pages/lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './pages/detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { TemplateComponent } from './pages/template/template.component';
import { ModelComponent } from './pages/model/model.component';

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
    PersonComponent,
    ListaComponent,
    ListaEscritoresComponent,
    DetalleEscritorComponent,
    ListaLibrosComponent,
    TemplateComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
