import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private employeeSvc: EmployeeService) {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      year: new FormControl(''),
      department: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    console.log(this.employeeForm.value);
    this.employeeSvc.insert(this.employeeForm.value);  
  }

}
