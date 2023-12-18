import { Component, OnInit } from '@angular/core';
import Book from '../../models/Book';
import { BooksReadersService } from '../books-readers.service';
import { ShowLineDirective } from '../show-line.directive';

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
    this.booksReadersService.getBooks()
      .subscribe((books) => this.books = books);
  }

  deleteBook(id: number): void {
    this.booksReadersService.removeBook(id).subscribe();
    this.booksReadersService.getBooks()
      .subscribe((books) => this.books = books);
  }
}
