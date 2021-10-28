import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { HttpService } from './http.service';
import { interval } from 'rxjs';
import { pipe } from 'rxjs';
import { Book } from './data-objects';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  public books: Book[] = [];
  public selectedBook: Book;

  constructor(
    private httpService: HttpService,
    private booksService: BooksService,
    private cd: ChangeDetectorRef
  ) {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    // always listening for new books
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      this.cd.detectChanges();
    });
  }

  // fetches data from the API
  public fetchData() {
    this.httpService.getData().subscribe(
      (data) => {
        console.log(data);
        (data as Book[]).forEach((book) => {
          this.booksService.addBook(book);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  selectedBookEvent(book: Book) {
    console.log(book);
    this.selectedBook = book;
  }
}
