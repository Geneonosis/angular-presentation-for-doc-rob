import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './data-objects'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://cs3743.fulgentcorp.com:32000/books');
  }

  public postBook(book: Book){
    if(!book) return null;
    const headers = {'Content-Type': 'application/json'};
    return this.http.post('http://cs3743.fulgentcorp.com:32000/books', book, {headers});
  }

  public deleteBook(book: Book){
    return this.http.delete('http://cs3743.fulgentcorp.com:32000/books/' + book.id);
  }
}
