import { Component, OnInit } from '@angular/core';
import Book from '../../models/Book';
import { BooksReadersService } from '../books-readers.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filterByName: string = '';
  filterByBorrowed: string = 'all';

  constructor(private booksReadersService: BooksReadersService) {}

  ngOnInit() {
    this.books = this.booksReadersService.getBooks();
  }

  deleteBook(book: Book): void {
    this.booksReadersService.removeBook(book);
    this.books = this.booksReadersService.getBooks();
  }
}
