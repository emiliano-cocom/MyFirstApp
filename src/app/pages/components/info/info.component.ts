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

  constructor() {
    this.currentDate = new Date();
    this.randomNumber = Math.random();
  }

  ngOnInit(): void {
  }

}
