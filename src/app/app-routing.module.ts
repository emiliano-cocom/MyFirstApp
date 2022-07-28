import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ProjectsComponent } from './components/employees/projects/projects.component';
import { ExperienciesComponent } from './components/employees/experiencies/experiencies.component'
import { CurriculumComponent } from './components/employees/curriculum/curriculum.component';
import { RandomGuard } from './random.guard';
import { CashRegisterComponent } from './cash_register/cash_register.component';
import { CalculatorComponent } from './calculator/calculator.component'

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