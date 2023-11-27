import { Injectable } from '@angular/core';
import Book from 'src/models/Book';
import { Reader } from 'src/models/Reader';


@Injectable({
  providedIn: 'root',
})
export class BooksReadersService {
  private books: Book[] = [];
  private readers: Reader[] = [];

  constructor(){
    this.books = [
      new Book(1, 'Author 1', 'Title 1', 2000, 'Description 1', false, new Date('2023-01-01'), new Date('2023-02-01')),
      new Book(2, 'Author 2', 'Title 2', 2010, 'Description 2', true, new Date('2023-01-01'), undefined),
      new Book(3, 'Author 3', 'Title 3', 1995, 'Description 3', false, undefined, undefined),
      new Book(4, 'Author 4', 'Title 4', 2022, 'Description 4', true, new Date('2023-03-01'), undefined),
      new Book(5, 'Author 5', 'Title 5', 1985, 'Description 5', false, new Date('2023-01-01'), new Date('2023-04-01')),
    ];

    this.readers = [
      new Reader(1, 'John', 'Doe', '123456789123', [this.books[0]]),
      new Reader(2, 'Jane', 'Smith', '987654321123', [this.books[1]]),
      new Reader(3, 'Alice', 'Johnson', '111222333123', [this.books[2]]),
      new Reader(4, 'Bob', 'Williams', '444555666123', [this.books[3]]),
      new Reader(5, 'Eva', 'Davis', '777888999123', [this.books[4]]),
    ];
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.Id === id);
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  assignBookToReader(book: Book, reader: Reader): void {

    reader.borrowBook(book);

    book.IsBorrowed = true;

    book.BorrowingDate = new Date();
  }

  returnBookFromReader(book: Book, reader: Reader): void {

    reader.returnBook(book);

    book.IsBorrowed = false;

    book.ReturnDate = new Date();
  }

  getReaders(): Reader[] {
    return this.readers;
  }

  getReader(id: number): Reader | undefined {
    return this.readers.find(reader => reader.Id === id);
  }

  addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  getReadersBorrowedBooks(readerId: number): Book[] {
    const reader = this.readers.find(reader => reader.Id === readerId);

    if (!reader) {
      return [];
    }

    return reader.BorrowedBooks;
  }
}
