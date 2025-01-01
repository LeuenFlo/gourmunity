import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.setupInitialStyles();
  }

  private setupInitialStyles(): void {
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = 'translateY(20px)';
    this.el.nativeElement.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    if (this.delay) {
      this.el.nativeElement.style.transitionDelay = `${this.delay}ms`;
    }
  }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.el.nativeElement.style.opacity = '1';
              this.el.nativeElement.style.transform = 'translateY(0)';
            }, 100);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
} 