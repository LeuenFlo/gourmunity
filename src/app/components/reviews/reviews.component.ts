import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : 2;
    this.resetAutoplay();
  }

  nextSlide() {
    this.currentSlide = this.currentSlide < 2 ? this.currentSlide + 1 : 0;
    this.resetAutoplay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoplay();
  }

  private startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Wechselt alle 5 Sekunden
  }

  private stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
