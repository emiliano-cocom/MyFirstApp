import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'informacion'},
  { path: 'informacion', component: InfoComponent },
  { path: 'about', redirectTo: 'sobre' },
  { path: 'sobre', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'empleados/:empleadoId', component: EmployeeDetailComponent },
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