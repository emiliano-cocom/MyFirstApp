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

  constructor() {
    this.titles = ['Jurassic Park', 'Star Wars', 'Jumanji'];
    this.input_text = 'Valor Inicial';
    this.person = {};
    this.arrHomework = [];
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
}
