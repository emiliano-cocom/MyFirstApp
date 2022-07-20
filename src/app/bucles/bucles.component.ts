import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  persons: any[];

  constructor() {
    this.persons = [
      { name: 'Janice', last_name: 'Najera Pabón', address: 'Ctra. de Siles, 16', phone: '741 385 960'},
      { name: 'Eliazar', last_name: 'Estévez Carmona', address: 'Avda. Rio Nalon, 7', phone: '634 933 009'},
      { name: 'Apolo', last_name: 'Loya Sierra', address: 'Plazuela do Porto, 90', phone: '783 326 373'},
      { name: 'Ascla', last_name: 'Hernádez Yañez', address: 'Salzillo, 60', phone: '684 653 495'},
      { name: 'Benet', last_name: 'Betancourt Godoy', address: 'Cañadilla, 47', phone: '785 664 317'},
      { name: 'Winifreda', last_name: 'Cedillo Leyva', address: 'Rúa do Paseo, 99', phone: '693 673 215'},
      { name: 'Popea', last_name: 'Lebrón Rangel', address: 'Reiseñor, 38', phone: '754 637 272'},
    ]
  }

  ngOnInit(): void {
  }

  onClick() {
    this.persons.push({
      name: 'José', last_name: 'Cocom', address: 'San Fernando, 30', phone: '999 534 478'
    })
  }

}
