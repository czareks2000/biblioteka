import { Component, Input } from '@angular/core';
import { Reader } from 'src/models/Reader';

@Component({
  selector: 'app-borrowed-history',
  templateUrl: './borrowed-history.component.html',
  styleUrls: ['./borrowed-history.component.css']
})
export class BorrowedHistoryComponent {
  @Input() reader?: Reader;
}
