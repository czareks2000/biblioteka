import { Component, Input } from '@angular/core';
import { Reader } from 'src/models/Reader';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent {
  @Input() readers: Reader[] = [];
}
