import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../services/escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( async params => {
      this.escritor = await this.escritoresService.getById(parseInt(params['escritorId']));
      // console.log(this.escritor);
    });
  }

}
