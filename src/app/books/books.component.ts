import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../data-objects';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  @Input() books: Book [];
  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onBookSelected(book: Book) {
    console.log(book);
    this.bookSelected.emit(book);
    this.cd.detectChanges();
  }

}
