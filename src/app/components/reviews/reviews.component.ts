import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  ngOnInit() {
    // Initialize the carousel
    const carousel = new bootstrap.Carousel(document.getElementById('reviewCarousel'), {
      interval: 5000,
      touch: true
    });
  }
}
