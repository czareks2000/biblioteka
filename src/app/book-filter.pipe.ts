import { Pipe, PipeTransform } from '@angular/core';
import Book from 'src/models/Book';

@Pipe({
  name: 'booksFilter'
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filterByName: string): Book[] {
    if (!books || !filterByName) {
      return books;
    }

    return books.filter(book => book.Title.toLowerCase().includes(filterByName.toLowerCase()));
  }
}