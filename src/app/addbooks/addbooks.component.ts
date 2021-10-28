import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Book } from '../data-objects';
import { HttpService } from '../http.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss'],
})
export class AddbooksComponent implements OnInit {
  public input: string;

  constructor(public http: HttpService, private bookService: BooksService) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    let book: Book = {
      title: this.input,
    };
    console.log(book);
    this.http.postBook(book).subscribe(
      (res) => {
        console.log('success');
        console.log(res);
        this.bookService.addBook(book);
      },
      (err) => {
        if(err.status === 200) {
          console.log('success');
          this.bookService.addBook(book);
          return;
        }
        console.log('error');
        console.log(err);
      }
    );
  }
  
}
