import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavOpen = false;
  isScrolled = false;
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Für den scrolled Status
    this.isScrolled = window.scrollY > 50;

    // Für die Scroll-Progress-Bar
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (window.scrollY / windowHeight) * 100;
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
    document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
  }

  closeNav(): void {
    this.isNavOpen = false;
    document.body.style.overflow = '';
  }
}
