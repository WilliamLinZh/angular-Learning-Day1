import { Component } from '@angular/core';

import { books } from '../books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  books = [...books];
}
