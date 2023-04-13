import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CardListComponent },
      { path: 'book', component: BookComponent },
      { path: 'pen', component: PenComponent },
      { path: 'geometry', component: GeometryComponent },
      { path: 'paper', component: PaperComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'book/:bookId', component: BookDetailsComponent },
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
