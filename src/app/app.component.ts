import { Component } from '@angular/core';
import { Homework } from './models/homework.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  titles: string[];
  input_text: string;
  person: any;

  arrHomework: Homework[];

  mainText: string;

  paraghapProperties: any;

  show: boolean;

  constructor() {
    this.titles = ['Jurassic Park', 'Star Wars', 'Jumanji'];
    this.input_text = 'Valor Inicial';
    this.person = {};
    this.arrHomework = [];
    this.mainText = 'Texto desde el padre';
    this.paraghapProperties = { color: 'red', fontSize: '24px'};
    this.show = true;
  }

  ngOnInit(): void {
    let cont = 0;
    setInterval( () => {
      this.mainText = `Texto ${cont++}`;
    }, 2000)
  }

  onClickAlert($event) {
    console.log($event);
  }

  onFinished($event) {
    console.log($event);
  }

  onClick() {
    this.input_text = 'Valor desde el botón';
  }

  onCreateHomework($event) {
    this.arrHomework.push($event);
    console.log(this.arrHomework)
  }

  changeColor(color: string) {
    switch (color) {
      case 'a':
        this.paraghapProperties.color = 'yellow';
        break;
      case 'r':
        this.paraghapProperties.color = 'red';
        break;
      case 'v':
        this.paraghapProperties.color = 'green';
        break;
    }
  }

  onInput($event) {
    this.paraghapProperties.fontSize = `${$event.target.value}px`;
  }

  onClickShow() {
    this.show = !this.show;
  }
}
