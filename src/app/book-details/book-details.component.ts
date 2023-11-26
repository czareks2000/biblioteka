import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Book from 'src/models/Book';
import { BooksReadersService } from '../books-readers.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksReadersService: BooksReadersService
  )
  {
    const bookId = this.route.snapshot.paramMap.get('id');

    this.book = this.booksReadersService.getBook(Number(bookId));
  }
  
}
