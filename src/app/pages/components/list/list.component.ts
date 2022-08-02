import { Component, OnInit, Input } from '@angular/core';
import { Homework } from '../../../models/homework.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() homeworks: Homework[];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(homework: Homework) {
    homework.is_complete = !homework.is_complete;
  }

  deleteHomework(indice) {
    this.homeworks.splice(indice, 1);
  }

}
