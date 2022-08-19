import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://restcountries.com/v2/region/europe';
  }

  getPaises(): Promise<any[]> {
    return this.http.get<any[]>(this.url).toPromise();
  }
}
