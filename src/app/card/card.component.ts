import { Component, Input } from '@angular/core';
import { Card } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  imageDisplay = true;
  @Input() card!: Card;

  hideImage() {
    this.imageDisplay = false;
  }
  showImage() {
    this.imageDisplay = true;
  }
}
