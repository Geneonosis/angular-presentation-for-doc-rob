import { Injectable } from '@angular/core';
import { Book } from '../data-objects';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book [] = [];

  private booksBehaviorSubject = new BehaviorSubject<Book[]>(this.books);

  public addBook(book: Book) {
    this.books.push(book);
    this.booksBehaviorSubject.next(this.books);
  }

  public getBooks(): Observable<Book[]> {
    return this.booksBehaviorSubject.asObservable();
  }

  constructor() { }
}
