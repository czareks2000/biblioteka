import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Book from 'src/models/Book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  @Input() books: Book[] = [];
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      this.books.length + 1, // Automatyczne generowanie unikalnego ID (tutaj na podstawie ilości książek)
      this.bookForm.value.author,
      this.bookForm.value.title,
      this.bookForm.value.publicationYear,
      this.bookForm.value.description,  
      false // Nowa książka nie jest wypożyczona na początku
    );
    this.books.push(newBook);
    console.log('Dodano książkę:', newBook);

    // Opcjonalnie można dodać kod obsługi np. wysłanie na serwer itp.

    this.bookForm.reset();
  }
}

}
