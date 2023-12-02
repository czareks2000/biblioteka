import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Book from 'src/models/Book';
import { Reader } from 'src/models/Reader';
import { BooksReadersService } from '../books-readers.service';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {
  @Input() book: Book | undefined = undefined;
  @Output() assginBookToReader = new EventEmitter();
  selectedReaderId: number = -1;
  readers: Reader[] = [];

  constructor(private booksReadersService: BooksReadersService) {}

  ngOnInit() {
    this.booksReadersService.getReaders()
      .subscribe((readers) => this.readers = readers);
  }

  submit(readerId: number) {
    this.assginBookToReader.emit(readerId);
  }
}
