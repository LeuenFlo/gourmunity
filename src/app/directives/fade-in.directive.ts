import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  constructor(
    private el: ElementRef,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('fade-in');
    this.animationService.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.animationService.unobserve(this.el.nativeElement);
  }
} 