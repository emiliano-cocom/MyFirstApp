import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  message: string;
  identifParrafo: string;
  identifInput: string;

  constructor() { 
    this.message = 'Un saludo a todos';
    this.identifParrafo = 'parrafoPrincipal';
    this.identifInput = 'text';

    setTimeout( () => {
      this.message = 'Otro mensaje diferente';
      this.identifParrafo = 'main';
      this.identifInput = 'password';
    }, 3000);

  }

  ngOnInit(): void {
  }

  showGreeting(): string {
    return 'Saludo desde el método';
  }

}
