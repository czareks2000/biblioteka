import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Book from 'src/models/Book';
import { Reader } from 'src/models/Reader';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CalculateReturnDateService } from './calculate-return-date.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BooksReadersService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private returnDataService: CalculateReturnDateService){}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books/`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books/`, book, httpOptions);
  }

  removeBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`);
  }

  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(`${this.apiUrl}/readers/`);
  }

  getReader(id: number): Observable<Reader> {
    return this.http.get<Reader>(`${this.apiUrl}/readers/${id}`);
  }

  addReader(reader: Reader): Observable<Reader> {
    return this.http.post<Reader>(`${this.apiUrl}/readers/`, reader, httpOptions);
  }

  assignBookToReader(bookId: number, readerId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`).pipe(
      switchMap(book => {
        book.isBorrowed = true;
        book.borrowingDate = new Date();
        book.returnDate=this.returnDataService.calculateReturnDate(book.BorrowingDate);
          
        return this.http.get<Reader>(`${this.apiUrl}/readers/${readerId}`).pipe(
          switchMap(reader => {
            reader.borrowedBooks.push(book);
  
            return this.http.put<Reader>(`${this.apiUrl}/readers/${reader.id}`, reader, httpOptions).pipe(
              switchMap(() => this.http.put<Book>(`${this.apiUrl}/books/${book.id}`, book, httpOptions)),
            );
          })
        );
      })
    );
  }
  
  returnBookFromReader(bookId: number, readerId: number): Observable<Reader> {
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`).pipe(
      switchMap(book => {
        book.isBorrowed = false;
        book.returnDate = new Date();
  
        return this.http.get<Reader>(`${this.apiUrl}/readers/${readerId}`).pipe(
          switchMap(reader => {
            const foundBook = reader.borrowedBooks.find(b => b.id === bookId);
            if (foundBook) {
              Object.assign(foundBook, book);
            }
  
            return this.http.put<Book>(`${this.apiUrl}/books/${book.id}`, book, httpOptions).pipe(
              switchMap(() => this.http.put<Reader>(`${this.apiUrl}/readers/${reader.id}`, reader, httpOptions))
            );
          })
        );
      })
    );
  }
}
