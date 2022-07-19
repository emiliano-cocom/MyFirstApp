import { Component, OnInit, Input } from '@angular/core';
import { Homework } from '../../models/homework.model';

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

  showHomeworks() {
    let result = '<ul>';
    for(let homework of this.homeworks) {
      result += `<li>${homework.title} - ${homework.description}</li>`;
    }
    result += '</ul>';

    return result;
  }

}
