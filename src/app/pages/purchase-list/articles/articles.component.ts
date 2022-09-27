import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  @Input() title: string;
  @Input() textButton: string;
  @Output() purchaseArticle: EventEmitter<number>

  constructor() {
    this.purchaseArticle = new EventEmitter();
  }

  ngOnInit(): void {
  }

  buyArticle(indice: number): void {
    this.purchaseArticle.emit(indice);
  }

}
