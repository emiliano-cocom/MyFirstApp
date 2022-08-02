import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() text: string;

  constructor() {
    console.log('*** Estoy en el constructor');
    console.log('Lo uso para inicializar propiedades');
    console.log(`TEXTO: ${this.text}`);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('*** Estoy en el ngOnChanges');
    console.log(`TEXTO: ${this.text}`);
    console.log(`Valor anterior: ${changes['text'].previousValue}. Valor actual: ${changes['text'].currentValue}`);
  }

  ngOnInit(): void {
    console.log('*** Estoy en el ngOnInit');
    console.log('Lo uso para lanzar las acciones que arrancan el componente');
    console.log(`TEXTO: ${this.text}`);
  }

  ngAfterViewInit() {
    console.log('*** Estoy en el ngAfterViewInit');
    console.log('Lo uso para lanzar las acciones iniciales dentro de la plantilla');
  }

  ngOnDestroy() {
    // se ejecuta cuando el componente es destruido, lo podemos utilizar para accciones de limpieza
  }

}
