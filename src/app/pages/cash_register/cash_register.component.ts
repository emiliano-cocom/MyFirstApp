import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash_register.component.html',
  styleUrls: ['./cash_register.component.css']
})
export class CashRegisterComponent implements OnInit {

  /* cash register */
  arr_food: Product[];
  arr_drink: Product[];
  products_selected: Product[];

  constructor() {
    this.arr_food = [
      new Product(
        'Cocido', 
        'https://i.blogs.es/31e3ce/cocido-madrileno/840_560.jpg', 
        10.50
      ),
      new Product(
        'Paella', 
        'https://www.comedera.com/wp-content/uploads/2014/02/paella-de-mariscos-700x400.jpg', 
        12.20
      ),
      new Product(
        'Cachopo', 
        'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Cachopo.jpg?width=1200&enable=upscale', 
        15.75
      ),
      new Product(
        'Pizza', 
        'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg', 
        7.80
      ),
      new Product(
        'Pasta', 
        'https://www.hola.com/imagenes//cocina/escuela/20180830129064/video-receta-como-hacer-pasta-casera/0-595-236/pasta-casera-t.jpg', 
        6.90
      ),
      new Product(
        'Hamburguesa', 
        'https://storage.contextoganadero.com/s3fs-public/cronica_de_la_semana/field_image/2022-03/cronica-origen-hamburguesas.jpg', 
        5.75
      ),
    ];
    this.arr_drink = [
      new Product(
        'Coca cola', 
        'https://www.kalamazoo.es/content/images/product/38466_1_xnl.jpg', 
        2.5
      ),
      new Product(
        'Fanta', 
        'https://i0.wp.com/mrvolk.com.mx/wp-content/uploads/2020/04/3271.jpg?fit=700%2C700&ssl=1', 
        2.5
      ),
      new Product(
        'Cerveza', 
        'https://s.libertaddigital.com/2019/01/02/1920/1080/fit/cerveza-fresca.jpg', 
        2.5
      ),
      new Product(
        'Agua', 
        'https://www.kalamazoo.es/content/images/product/55574_1_xnl.jpg', 
        2.5
      ),
    ];
    this.products_selected = [];
  }

  ngOnInit(): void {
  }

  onProductSelected($event) {
    const product_found = this.products_selected.find(product => product.name == $event.name);
    if(product_found) {
      product_found.quantity++;
    }else {
      this.products_selected.push($event);
    }
  }

}