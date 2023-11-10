import { Component } from '@angular/core';
import Book from 'src/models/Book';
import { Reader } from 'src/models/Reader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteka';
  books: Book[];
  readers: Reader[];

  constructor(){
    this.books = [
      new Book(1, 'Author 1', 'Title 1', 2000, 'Description 1', false, new Date('2023-01-01'), undefined),
      new Book(2, 'Author 2', 'Title 2', 2010, 'Description 2', true, new Date('2023-01-01'), new Date('2023-02-01')),
      new Book(3, 'Author 3', 'Title 3', 1995, 'Description 3', false, undefined, undefined),
      new Book(4, 'Author 4', 'Title 4', 2022, 'Description 4', true, new Date('2023-03-01'), new Date('2023-04-01')),
      new Book(5, 'Author 5', 'Title 5', 1985, 'Description 5', false, new Date('2023-01-01'), undefined),
    ];

    this.readers = [
      new Reader(1, 'John', 'Doe', '123456789', [this.books[0]]),
      new Reader(2, 'Jane', 'Smith', '987654321', [this.books[1]]),
      new Reader(3, 'Alice', 'Johnson', '111222333', [this.books[2]]),
      new Reader(4, 'Bob', 'Williams', '444555666', [this.books[3]]),
      new Reader(5, 'Eva', 'Davis', '777888999', [this.books[4]]),
    ];
  }
}
