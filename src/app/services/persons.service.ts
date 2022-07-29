import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable()

export class PersonsService {

  persons: Person[];

  constructor() {
    this.persons = [
      new Person('Mario', 'Rodriguez', 32, true),
      new Person('Rocío', 'García', 15, false),
      new Person('Laura', 'Robles', 28, true),
      new Person('Lorenzo', 'Romero', 65, true),
    ];
  }

  getAll() {
    return this.persons;
  }

  create(person: Person) {
    this.persons.push(person);
  }
}
