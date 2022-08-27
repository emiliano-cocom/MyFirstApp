import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickyAndMortyAPIService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api';
  }

  getAllPersonajes(page: any = 2): Promise<any> {
    return this.http.get<any>(this.baseUrl + "/character"+ "?page=" + page).toPromise();
  }
}
