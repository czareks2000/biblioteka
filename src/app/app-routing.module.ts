import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { BorrowedHistoryComponent } from './borrowed-history/borrowed-history.component';
import { Reader } from 'src/models/Reader';
import { ReaderAddComponent } from './reader-add/reader-add.component';
import { BookAddComponent } from './book-add/book-add.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'readers', component: ReaderListComponent},
  {path: 'reader/:id/history', component: BorrowedHistoryComponent},
  {path:'add-new-reader', component: ReaderAddComponent},
  {path:'add-new-book', component:BookAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
