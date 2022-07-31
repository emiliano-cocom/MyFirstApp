import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../services/escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    // this.escritores = this.escritoresService.getAll();
    // promise
    this.escritoresService.getAllPromise()
      .then(response => this.escritores = response)
      .catch(error => console.log(error));
  }

  async onChange($event) {
    if($event.target.value === 'todos') {
      this.escritores = await this.escritoresService.getAllPromise();
    }else {
      this.escritores = await this.escritoresService.getByCountry($event.target.value);
    }
  }

}
