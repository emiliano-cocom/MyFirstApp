import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByWriter(escritorId): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter( libro => {
        return libro.escritor === escritorId;
      });
      resolve(arrFiltrado);
    });
  }
}
