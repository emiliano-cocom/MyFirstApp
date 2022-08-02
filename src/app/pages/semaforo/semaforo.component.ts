import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  stringClass: string;
  arrayClass: string[];
  selectedColor: string;

  constructor() {
    this.stringClass = 'semaforo rojo';
    this.arrayClass = ['semaforo'];
    this.arrayClass.push('rojo');
    this.arrayClass.push('redondo');
    this.selectedColor = 'a';
  }

  ngOnInit(): void {
    setInterval(() => {
      if(this.selectedColor === 'r') {
        this.selectedColor = 'a';
      }else if(this.selectedColor === 'a') {
        this.selectedColor = 'v';
      }else if(this.selectedColor === 'v') {
        this.selectedColor = 'r';
      }
    }, 1000);
  }

}
