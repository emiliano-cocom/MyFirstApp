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

  constructor() {
    this.currentDate = new Date();
    this.randomNumber = Math.random();
    this.student = {
      nombre: 'José',
      apellidos: 'Cocom',
      notas: [3,4,7,10]
    };
    this.text = 'En un lugar de la Mancha';
  }

  ngOnInit(): void {
  }

}
