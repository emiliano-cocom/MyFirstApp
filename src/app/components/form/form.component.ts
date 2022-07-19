import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Homework } from '../../models/homework.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() create_homework: EventEmitter<Homework>;

  new_homework: Homework;

  constructor() {
    this.new_homework = new Homework();
    this.create_homework = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.create_homework.emit(this.new_homework);
    this.new_homework = new Homework();
  }

}
