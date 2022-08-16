import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-post',
  templateUrl: './formulario-post.component.html',
  styleUrls: ['./formulario-post.component.css']
})
export class FormularioPOSTComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsSvc: PostsService) {
    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.postsSvc.create(this.formulario.value)
      console.log(response)
    }catch(erros) {
      console.log(erros)
    }
  }

}
