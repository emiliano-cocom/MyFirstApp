import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  time: number;

  constructor() {
    this.time = 10;
  }

  ngOnInit(): void {
  }

  startChronometer() {
    let interval = setInterval( () => {
      this.time--;
      if(this.time === 0) {
        clearInterval(interval);
        this.time = 10;
      }
    }, 1000)
  }

}
