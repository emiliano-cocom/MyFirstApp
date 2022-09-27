import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  selectedArticles: Article[];
  purchasedArticles: Article[];

  constructor() {
    this.selectedArticles = [];
    this.purchasedArticles = [];
  }

  ngOnInit(): void {
  }

  articleCreated($event): void {
    this.selectedArticles.push($event);
  }

  purchaseArticle($event): void {
    let article = this.selectedArticles.splice($event, 1);
    this.purchasedArticles.push(article[0]);
  }

  returnArticle($event): void {
    let article =  this.purchasedArticles.splice($event, 1);
    this.selectedArticles.push(article[0]);
  }
}
