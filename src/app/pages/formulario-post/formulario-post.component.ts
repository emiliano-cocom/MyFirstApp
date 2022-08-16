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

  onClickUpdate() {
    this.postsSvc.update({
      id: 5,
      title: 'Nuevo Título',
      body: 'Nuevo cuerpo para el post',
      userId: 3
    }).then(response => console.log(response))
      .catch(errors => console.log(errors));
  }

  onClickDelete() {
    this.postsSvc.delete(5)
    .then(response => console.log(response))
    .catch(errors => console.log(errors));
  }

}
