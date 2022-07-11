import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  number_one: number;
  number_two: number;
  result: number;

  constructor() {
    this.number_one = 78;
    this.number_two = 3;
    this.result = 0;
  }

  ngOnInit(): void {
  }

  sumar() {
    this.result = this.number_one + this.number_two;
  }

}
