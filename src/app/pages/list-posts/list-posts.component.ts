import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  arr_posts: any[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(response => this.arr_posts = response)
      .catch(errors => console.log(errors));
  }

  async onClick(postId) {
    try {
      const post = await this.postsService.getById(postId);
      console.log(post);
    }catch(error) {
      console.log(error);
    } 
  }

  onClickPost() {
    this.postsService.create({
      title: 'Nuevo título',
      body: 'Este es el cuerpo del post',
      userId: 1
    }).then(response => console.log(response))
      .catch(errors => console.log(errors));
  }

}
