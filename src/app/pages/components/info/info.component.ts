import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  //DatePipe
  currentDate: Date;

  //PercentPipe
  randomNumber: number;

  // JSONPipe
  student: any;

  // LowerCasePipe, UpperCasePipe, TitleCasePipe
  text: string;

  // SlicePipe
  animals: string[];
  min: number;
  max: number;
  long_text: string;

  constructor() {
    this.currentDate = new Date();
    this.randomNumber = Math.random();
    this.student = {
      nombre: 'José',
      apellidos: 'Cocom',
      notas: [3,4,7,10]
    };
    this.text = 'En un lugar de la Mancha';
    this.animals = ['perro', 'gato', 'pajaro', 'tortuga'];
    this.min = 0;
    this.max = this.animals.length;
    this.long_text = 'Su población es 99 % urbana y en 2020 se población se censó en 9 209 944 habitantes';
  }

  ngOnInit(): void {
  }

}
