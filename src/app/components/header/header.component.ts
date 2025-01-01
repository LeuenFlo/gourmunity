import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <nav>
        <div class="logo">
          <a href="#home" (click)="scrollToTop(); $event.preventDefault()">
            <img src="assets/images/gm_logo.jpg" alt="Gourmunity Logo">
            <span>Gourmunity</span>
          </a>
        </div>

        <button class="menu-btn" (click)="toggleMenu()">
          <span></span>
        </button>

        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li><a href="#menu" (click)="scrollToSection('#menu'); $event.preventDefault()">Angebote</a></li>
          <li><a href="#reviews" (click)="scrollToSection('#reviews'); $event.preventDefault()">Rezensionen</a></li>
          <li><a href="#about-me" (click)="scrollToSection('#about-me'); $event.preventDefault()">Über mich</a></li>
          <li><a href="#contact" (click)="scrollToSection('#contact'); $event.preventDefault()">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      z-index: 1000;
    }

    nav {
      max-width: 896px;
      margin: 0 auto;
      padding: 0.75rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: #333;
    }

    .logo img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    .logo span {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .menu-btn {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }

    .menu-btn span {
      display: block;
      width: 24px;
      height: 2px;
      background: #333;
      position: relative;
    }

    .menu-btn span::before,
    .menu-btn span::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #333;
      transition: transform 0.3s;
    }

    .menu-btn span::before {
      transform: translateY(-8px);
    }

    .menu-btn span::after {
      transform: translateY(8px);
    }

    .nav-menu {
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .nav-menu a {
      color: #333;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem 0;
    }

    .nav-menu a:hover {
      color: #c3b5a7;
    }

    @media (max-width: 768px) {
      .menu-btn {
        display: block;
      }

      .menu-btn.active span {
        background: transparent;
      }

      .menu-btn.active span::before {
        transform: translateY(0) rotate(45deg);
      }

      .menu-btn.active span::after {
        transform: translateY(0) rotate(-45deg);
      }

      .nav-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(100%);
        transition: transform 0.3s;
      }

      .nav-menu.active {
        transform: translateX(0);
      }

      .nav-menu a {
        font-size: 1.2rem;
        padding: 1rem;
      }
    }

    @media (max-width: 360px) {
      nav {
        padding: 0.5rem 0.75rem;
      }

      .logo img {
        width: 2rem;
        height: 2rem;
      }

      .logo span {
        font-size: 1rem;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    this.closeMenu();
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.closeMenu();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
} 