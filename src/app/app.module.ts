import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BorrowedHistoryComponent } from './borrowed-history/borrowed-history.component';
import { BookAddComponent } from './book-add/book-add.component';
import { FormsModule } from '@angular/forms';
import { WordsCountValidatorDirective } from './words-count-validator.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksReadersService } from './books-readers.service';
import { BookFilterPipe } from './book-filter.pipe';
import { BooksFilterBorrowedPipe } from './books-filter-borrowed.pipe';
import { ReaderAddComponent } from './reader-add/reader-add.component';
import { HttpClientModule } from '@angular/common/http';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ReaderListComponent,
    BookDetailsComponent,
    BorrowedHistoryComponent,
    BookAddComponent,
    WordsCountValidatorDirective,
    NavBarComponent,
    BookFilterPipe,
    BooksFilterBorrowedPipe,
    ReaderAddComponent,
    BorrowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BooksReadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
