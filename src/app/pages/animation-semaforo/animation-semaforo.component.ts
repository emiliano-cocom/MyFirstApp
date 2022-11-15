import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation-semaforo',
  templateUrl: './animation-semaforo.component.html',
  styleUrls: ['./animation-semaforo.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow',
        'transform': 'scale(2)'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      // transition('* => *', animate(500)) //se aplica a todos los estados
      transition('rojo => amarillo', animate(500)),
      transition('amarillo => verde', animate(1000)),
      transition('verde => rojo', animate('.5s ease-in')),
      /* transicion para que aparezca desplazandose
      transition('void => *', [
        style({ 'transform': 'translateX(-100%)'}),
        animate(1000)
      ])*/
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(200px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
        ]))
      ])
    ])
  ]
})
export class AnimationSemaforoComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'verde';
  }

  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(): void {
    setInterval(() => {
      if(this.color === 'rojo'){
        this.color = 'amarillo';
      }else if(this.color === 'amarillo'){
        this.color = 'verde';
      }else if(this.color === 'verde'){
        this.color = 'rojo';
      }
    }, 2000)
  }

}
