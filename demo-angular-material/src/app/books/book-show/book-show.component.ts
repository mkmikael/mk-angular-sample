import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service'

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
