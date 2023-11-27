import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksReadersService } from '../books-readers.service';
import { Reader } from 'src/models/Reader';


@Component({
  selector: 'app-reader-add',
  templateUrl: './reader-add.component.html',
  styleUrls: ['./reader-add.component.css']
})
export class ReaderAddComponent {
  readerForm: FormGroup;

  constructor(private fb: FormBuilder, private booksReadersService: BooksReadersService) {
    this.readerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      pesel: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^[0-9]+$')]], 
      borrowedBooks: [[]],
    });
  }

  onSubmit(): void {
    if (this.readerForm.valid) {
      const newReader = new Reader(
        this.booksReadersService.getReaders().length + 1,
        this.readerForm.value.firstName,
        this.readerForm.value.lastName,
        this.readerForm.value.pesel,
        this.readerForm.value.borrowedBooks
      );

      this.booksReadersService.addReader(newReader);

      this.readerForm.reset();
    }
  }
}
