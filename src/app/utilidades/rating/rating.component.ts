import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input()
  maxRating = 5;

  @Input()
  ratingSelected = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();

  maxRatingArr = [];

  votado = false;

  ratingBefore;

  constructor() {}

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  manejarmouseEnter(index: number): void {
    this.ratingSelected = index + 1;
  }

  manejarMouseLeave() {
    if (this.ratingBefore !== 0) {
      this.ratingSelected = this.ratingBefore;
    } else {
      this.ratingSelected = 0;
    }
  }

  rate(index: number): void {
    this.ratingSelected = index + 1;
    this.votado = true;
    this.ratingBefore = this.ratingSelected;
    this.rated.emit(this.ratingSelected);
  }
}
