import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-form-articles',
  templateUrl: './form-articles.component.html',
  styleUrls: ['./form-articles.component.css']
})
export class FormArticlesComponent implements OnInit {

  article: Article;
  @Output() articleCreated: EventEmitter<Article>;

  constructor() {
    this.article = new Article();
    this.articleCreated = new EventEmitter();
  }

  ngOnInit(): void {
  }

  sendArticle(): void {
    this.articleCreated.emit(this.article);
    this.article = new Article();
  }

}
