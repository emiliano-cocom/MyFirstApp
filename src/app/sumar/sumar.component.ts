import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() number_one: number;
  @Input() number_two: number;
  result: number;

  constructor() {
    this.number_one = 0;
    this.number_two = 0;
    this.result = 0;
  }

  ngOnInit(): void {
  }

  sumar() {
    this.result = this.number_one + this.number_two;
  }

}
