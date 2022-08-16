import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(id: number): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  create({title, body, userId}): Promise<any> {
    const bodyRequest = { title, body, userId };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    return this.httpClient.post<any>(this.baseUrl, bodyRequest, httpOptions).toPromise();
  }

  update({id, title, body, userId}): Promise<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, {id, title, body, userId}).toPromise();
  }

  delete(id): Promise<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`).toPromise();
  }
}
