import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private observer: IntersectionObserver;

  constructor(private ngZone: NgZone) {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.ngZone.run(() => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  }

  observe(element: Element): void {
    this.observer.observe(element);
  }

  unobserve(element: Element): void {
    this.observer.unobserve(element);
  }
} 