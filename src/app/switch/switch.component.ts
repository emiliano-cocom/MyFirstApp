import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  number_option: number;
  string_option: string;

  constructor() {
    this.number_option = 40;
    this.string_option = 'tres';
  }

  ngOnInit(): void {
  }

}
