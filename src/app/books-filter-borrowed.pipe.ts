import { Pipe, PipeTransform } from '@angular/core';
import Book from 'src/models/Book';

@Pipe({
  name: 'booksFilterByBorrowed'
})
export class BooksFilterBorrowedPipe implements PipeTransform {
  transform(books: Book[], filterByBorrowed: string): Book[] {
    if (!books || !filterByBorrowed || filterByBorrowed === 'all') {
      return books;
    }

    const isBorrowed = filterByBorrowed === 'borrowed';
    
    return books.filter(book => book.IsBorrowed === isBorrowed);
  }
}