import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
    const nav = document.getElementsByTagName("nav")[0];
    const btn = document.getElementById("menu_button");
    
    if (this.isOpen) {
      nav.style.top = "0";
      if (btn) btn.style.left = "-5em";
    } else {
      nav.style.top = "-200vh";
      if (btn) {
        btn.style.left = "0";
        btn.setAttribute('src', 'assets/images/burger.png');
      }
    }
  }
}
