import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isNavOpen = false;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
    document.body.style.overflow = this.isNavOpen ? 'hidden' : '';
  }

  closeNav(): void {
    this.isNavOpen = false;
    document.body.style.overflow = '';
  }
}
