import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  message: string;

  constructor() { 
    this.message = 'Un saludo a todos';

    setTimeout( () => {
      this.message = 'Otro mensaje diferente';
    }, 3000);

  }

  ngOnInit(): void {
  }

  showGreeting(): string {
    return 'Saludo desde el método';
  }

}
