import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<any> {
    try {
      const response = await this.employeeSvc.getAll();
      this.employees = response;
    }catch(error) {
      console.log(error)
    }
  }

}
