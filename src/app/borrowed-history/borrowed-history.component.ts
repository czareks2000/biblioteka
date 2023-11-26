import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reader } from 'src/models/Reader';
import { BooksReadersService } from '../books-readers.service';

@Component({
  selector: 'app-borrowed-history',
  templateUrl: './borrowed-history.component.html',
  styleUrls: ['./borrowed-history.component.css']
})
export class BorrowedHistoryComponent {
  reader: Reader | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksReadersService: BooksReadersService
  )
  {
    const readerId = this.route.snapshot.paramMap.get('id');

    this.reader = this.booksReadersService.getReader(Number(readerId));
  }
}
