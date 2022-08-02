import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {

  @Input() time: number;
  count: number;

  @Output() finished: EventEmitter<string>;

  constructor() {
    this.count = 10;
    this.finished = new EventEmitter();
  }

  ngOnInit(): void {
    this.count = this.time ? this.time : 10;
  }

  startChronometer() {
    let interval = setInterval( () => {
      this.count--;
      if(this.count < 0) {
        clearInterval(interval);
        this.count = this.time;
        this.finished.emit('Finaliza el cronómetro con el número ' + this.time);
      }
    }, 1000)
  }

}
