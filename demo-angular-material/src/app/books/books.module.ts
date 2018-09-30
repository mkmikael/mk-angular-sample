import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './book.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookListComponent, BookShowComponent],
  exports: [BookShowComponent],
  providers: [BookService]
})
export class BooksModule { }
