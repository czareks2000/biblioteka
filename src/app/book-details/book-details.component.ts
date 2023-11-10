import { Component, Input } from '@angular/core';
import Book from 'src/models/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book?: Book;
}
