import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { BookComponent } from './book/book.component';
import { PenComponent } from './pen/pen.component';
import { GeometryComponent } from './geometry/geometry.component';
import { PaperComponent } from './paper/paper.component';
import { ProductsComponent } from './products/products.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import { BookCommentsComponent } from './book-comments/book-comments.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CardListComponent },
      { path: 'book', component: BookComponent },
      { path: 'pen', component: PenComponent },
      { path: 'geometry', component: GeometryComponent },
      { path: 'paper', component: PaperComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'book/:bookId', component: BookDetailsComponent },
      { path: 'bookReviews', component: BookReviewsComponent },
      { path: 'bookComments', component: BookCommentsComponent },
      { path: 'menu', component: MenuComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CardListComponent,
    CardComponent,
    BookComponent,
    PenComponent,
    GeometryComponent,
    PaperComponent,
    ProductsComponent,
    BookCardComponent,
    BookDetailsComponent,
    BookReviewsComponent,
    BookCommentsComponent,
    MenuComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
