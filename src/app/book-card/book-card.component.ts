import { Component, Input } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  imageDisplay = true;
  @Input() book!: Book;

  hideImage() {
    this.imageDisplay = false;
  }
  showImage() {
    this.imageDisplay = true;
  }
}
