import { Component, Input } from '@angular/core';
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from 'src/models/Book';
import { BooksReadersService } from '../books-readers.service';
import { Reader } from 'src/models/Reader';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksReadersService: BooksReadersService,
    private ngZone: NgZone
  )
  {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.booksReadersService.getBook(Number(bookId))
      .subscribe((book) => this.book = book);
  }

  assignBookToReader = (bookId: number, readerId: number, ): void => {
    this.booksReadersService.assignBookToReader(bookId, readerId)
      .subscribe((book) => this.book = book);
  }
}
