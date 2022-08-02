import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() title: string;
  @Input() products: Product[];

  @Output() product_selected: EventEmitter<Product>;

  constructor() {
    this.product_selected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(product) {
    this.product_selected.emit(product);
  }

}
