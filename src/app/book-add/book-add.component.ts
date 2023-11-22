import { Component, Input } from '@angular/core';
import Book from 'src/models/Book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  @Input() books: Book[] = [];
  data: Book=new Book(0,'','',0,'',false,undefined)
  currentYear: number = new Date().getFullYear();



  submit(data: Book)
{
  console.warn(data)
  data.Id=this.books.length+1;
  data.IsBorrowed=false;
  this.books.push(data);
  this.data = new Book(0, '', '',0,'', false, undefined);
  
}
}
