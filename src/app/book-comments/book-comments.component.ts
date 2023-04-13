import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-comments',
  templateUrl: './book-comments.component.html',
  styleUrls: ['./book-comments.component.css'],
})
export class BookCommentsComponent {
  commentsForm = this.formBuilder.group({
    bookName: '',
    readerName: '',
    comments: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  clearForm() {
    console.warn('Comments cleared ' + this.commentsForm.value);
    this.commentsForm.reset();
  }

  submitComments() {
    window.alert('Comments submitted!');
    console.warn('Comments cleared ' + this.commentsForm.value);
    this.commentsForm.reset();
  }
}
