import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';

  titles: string[];

  constructor() {
    this.titles = ['Jurassic Park', 'Star Wars', 'Jumanji'];
  }

  onClickAlert($event) {
    console.log($event);
  }
}
