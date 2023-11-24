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

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ReaderListComponent,
    BookDetailsComponent,
    BorrowedHistoryComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
