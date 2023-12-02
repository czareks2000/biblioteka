import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Book from 'src/models/Book';
import { BooksReadersService } from '../books-readers.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private booksReadersService: BooksReadersService, private router: Router) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', [Validators.required,Validators.pattern('[A-Z]*')]], //
      publicationYear: ['', [Validators.required, Validators.min(0), Validators.max(new Date().getFullYear())]],//
      description: ['']

    });
  }
  
  onSubmit(): void {
  if (this.bookForm.valid) {
    const newBook = new Book(
      0,
      this.bookForm.value.author,
      this.bookForm.value.title,
      this.bookForm.value.publicationYear,
      this.bookForm.value.description,  
      false, // Nowa książka nie jest wypożyczona na początku
    );

    this.booksReadersService.addBook(newBook)
      .subscribe((book) => console.log('Dodano książkę:', book));
    
    this.router.navigate(['/']);

    this.bookForm.reset();
  }
}

}
