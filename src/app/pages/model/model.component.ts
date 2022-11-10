import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
        Validators.required,
        Validators.maxLength(10)
      ]),
      edad: new FormControl('', [
        Validators.required,
        this.edadValidator
      ]),
      dni: new FormControl('', [
        Validators.required,
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repite_password: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ])
    })
  }

  ngOnInit(): void {
    const emailControl = this.formulario.controls['email'];
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    });
  }

  onSubmit(): void {
    if(this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    
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

  dniValidator(formControl) {
    const value = formControl.value;
    const letras = 'TRWAGMYFPDXBMJZSQVHLCKET';

    if(/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substr(0, value.length - 1);
      const letra = value.charAt(value.length - 1);
      
      const calculo = numero % 23;
      const letraSeleccionada = letras.charAt(calculo);
      if(letra.toUpperCase() == letraSeleccionada) {
        return null;
      }else {
        return { dnivalidator: 'La letra no coincide con el número'};
      }   
    }else {
      return { dnivalidator: 'El dni no tiene buen formato'};
    }
    
  }

}
