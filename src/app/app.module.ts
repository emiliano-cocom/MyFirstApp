import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Directives*/
import { UnderlineDirective } from './directives/underline.directive';

/* Components */
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
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { FormularioPOSTComponent } from './pages/formulario-post/formulario-post.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RickyAndMortyComponent } from './pages/ricky-and-morty/ricky-and-morty.component';

/* register locale */
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumToArrayPipe } from './pipes/num-to-array.pipe';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { ArticlesComponent } from './pages/purchase-list/articles/articles.component';
import { FormArticlesComponent } from './pages/purchase-list/form-articles/form-articles.component';

registerLocaleData(localeEs);

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
    ModelComponent,
    ListPostsComponent,
    FormularioPOSTComponent,
    PaisesComponent,
    RickyAndMortyComponent,
    ReversoPipe,
    CapitalizePipe,
    NumToArrayPipe,
    PurchaseListComponent,
    ArticlesComponent,
    FormArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
