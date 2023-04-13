import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css'],
})
export class BookReviewsComponent implements OnInit {
  reviews!: Observable<
    { bookName: string; reviewer: string; content: string }[]
  >;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.reviews = this.http.get<
      { bookName: string; reviewer: string; content: string }[]
    >('/assets/review.json');
  }
}
