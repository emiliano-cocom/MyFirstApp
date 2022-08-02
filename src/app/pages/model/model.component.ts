import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  /*
  * valid -- invalid
  * pristine -- dirty
  * untouched -- touched
  *
  */

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      dni: new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  edadValidator(formControl) {
    const value =  formControl.value;

    const max = 65;
    const min = 18;

    if(value >= 18 && value <= 65) {
      return null;
    }else {
      return { edadValidator: {max, min} };
    }
  }

}
