import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[];

  constructor(private paisesSvc: PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  async getPaises() {
    try {
      this.paises = await this.paisesSvc.getPaises();
      console.log(this.paises);
    }catch(errors) {
      console.log(errors);
    }
    
  }

}
