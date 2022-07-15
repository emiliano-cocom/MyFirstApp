import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  titles: string[];
  input_text: string;

  constructor() {
    this.titles = ['Jurassic Park', 'Star Wars', 'Jumanji'];
    this.input_text = 'Valor Inicial';
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
}
