import { Component, OnInit } from '@angular/core';
import { RickyAndMortyAPIService } from '../../services/ricky-and-morty-api.service';

@Component({
  selector: 'app-ricky-and-morty',
  templateUrl: './ricky-and-morty.component.html',
  styleUrls: ['./ricky-and-morty.component.css']
})
export class RickyAndMortyComponent implements OnInit {

  personajes: any[];
  currentPage: number;
  numPages: number;

  constructor(private rickyAndMortyApiSvc: RickyAndMortyAPIService) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.getPersonajes(this.currentPage);
  }

  getPersonajes(currentPage: number): void {
    this.rickyAndMortyApiSvc.getAllPersonajes(this.currentPage)
      .then(response => {
        this.personajes = response.results;
        this.numPages = response.info.pages;
        console.log(this.personajes);
      })
      .catch(errors => console.log(errors));
  }

  changePage(siguiente: boolean): void {
    if(siguiente) {
      this.currentPage++;
    }else {
      this.currentPage--;
    }
    this.getPersonajes(this.currentPage);
  }

}
