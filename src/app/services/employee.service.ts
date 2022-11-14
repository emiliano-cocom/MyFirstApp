import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  insert(employee: Employee): void {
    this.employees.push(employee);
    console.log(this.employees);
  }

  getAll(): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      resolve(this.employees);
    })
  }
}
