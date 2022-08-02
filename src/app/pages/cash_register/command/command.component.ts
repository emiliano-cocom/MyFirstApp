import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  @Input() arr_product: Product[];

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal() {
    let result = 0;
    for(let product of this.arr_product) {
      result += (product.price * product.quantity);
    }
    return result;
  }

  deleteProduct(indice) {
    if(this.arr_product[indice].quantity === 1) {
      this.arr_product.splice(indice, 1);
    }else {
      this.arr_product[indice].quantity--;
    }
    
  }

}
