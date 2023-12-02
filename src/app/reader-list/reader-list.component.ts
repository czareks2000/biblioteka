import { Component, Input } from '@angular/core';
import { Reader } from 'src/models/Reader';
import { BooksReadersService } from '../books-readers.service';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent {
  readers: Reader[] = [];

  constructor(private booksReadersService: BooksReadersService) {}

  ngOnInit() {
    this.booksReadersService.getReaders()
      .subscribe((readers) => this.readers = readers);
  }
}
