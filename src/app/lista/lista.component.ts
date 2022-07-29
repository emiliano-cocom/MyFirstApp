import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PersonsService]
})
export class ListaComponent implements OnInit {

  persons: Person[];

  constructor(private personsService: PersonsService) {

  }

  ngOnInit(): void {
    this.persons = this.personsService.getAll();
  }

  addPerson() {
    this.personsService.create(new Person('Juan', 'García', 45, true));
  }

}
