import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: string;
  isFinishedCalculation: boolean;

  constructor() {
    this.result = '0';
    this.isFinishedCalculation = false;
  }

  ngOnInit(): void {
  }

  getNumber(value) {
    if(this.isFinishedCalculation) {
      this.result = '0';
      this.isFinishedCalculation = false;
    }

    this.result === '0' ? this.result = value : this.result += value;
  }

  getResult() {
    this.result = eval(this.result);
    this.isFinishedCalculation = true;
  }

}
