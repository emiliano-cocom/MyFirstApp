import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './pages/components/info/info.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';
import { EmployeeDetailComponent } from './pages/components/employee-detail/employee-detail.component';
import { ProjectsComponent } from './pages/components/employees/projects/projects.component';
import { ExperienciesComponent } from './pages/components/employees/experiencies/experiencies.component'
import { CurriculumComponent } from './pages/components/employees/curriculum/curriculum.component';
import { RandomGuard } from './random.guard';
import { CashRegisterComponent } from './pages/cash_register/cash_register.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PersonComponent } from './pages/person/person.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ListaEscritoresComponent } from './pages/lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './pages/detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { TemplateComponent } from './pages/template/template.component';
import { ModelComponent } from './pages/model/model.component';
import { ListPostsComponent } from './pages/list-posts/list-posts.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'informacion'},
  { path: 'informacion', component: InfoComponent, canActivate: [RandomGuard] },
  { path: 'about', redirectTo: 'sobre' },
  { path: 'sobre', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { 
    path: 'empleados/:empleadoId', 
    component: EmployeeDetailComponent, 
    children: [
      { path: 'proyectos', component: ProjectsComponent },
      { path: 'experiencia', component: ExperienciesComponent },
      { path: 'curriculum', component: CurriculumComponent }
    ], 
  },
  { path: 'caja-registradora', component: CashRegisterComponent },
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'personas', component: PersonComponent },
  { path: 'lista-personas', component: ListaComponent },
  { path: 'escritores', component: ListaEscritoresComponent },
  { 
    path: 'escritores/:escritorId', 
    component: DetalleEscritorComponent,
    children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  },
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
  { path: 'posts', component: ListPostsComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '**', redirectTo: 'contacto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
* localhost:4200/empleados/122
* localhost:4200/empleados/456
* localhost:4200/empleados/324
*/

/*
* children routes
* localhost:4200/empleados/122/proyectos
* localhost:4200/empleados/356/curriculum
* localhost:4200/empleados/256/experiencia
*
*/