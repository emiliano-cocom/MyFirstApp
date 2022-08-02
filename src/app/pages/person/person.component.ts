import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonsService]
})
export class PersonComponent implements OnInit {

  persons: Person[];

  constructor(private personsService: PersonsService) {
  }

  ngOnInit(): void {
    this.persons = this.personsService.getAll();
  }

}
