import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { BorrowedHistoryComponent } from './borrowed-history/borrowed-history.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'readers', component: ReaderListComponent},
  {path: 'reader/:id/history', component: BorrowedHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
