import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../data-objects';
import { HttpService } from '../http.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input() books: Book [];
  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private cd: ChangeDetectorRef, private http: HttpService, private bookService: BooksService) { }

  ngOnInit(): void {
  }

  onBookSelected(book: Book) {
    this.bookSelected.emit(book);
    this.cd.detectChanges();
  }

  onBookDeleted(book: Book) {
    this.http.deleteBook(book).subscribe( res => {
      this.bookService.removeBook(book);
    }, err => {
      console.log(err);
      if(err.status === 200) {
        this.bookService.removeBook(book);
        return;
      }
    });
  }

}
