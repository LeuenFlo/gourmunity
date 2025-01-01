import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToSection(sectionId);
  }

  menuCategories = [
    {
      title: 'Apéro & Fingerfood',
      description: 'Kleine Köstlichkeiten für den perfekten Start',
      examples: [
        'Verschiedene Häppchen und Canapés',
        'Warme und kalte Fingerfood-Variationen',
        'Dips und hausgemachte Saucen',
        'Regionale Spezialitäten'
      ]
    },
    {
      title: 'Buffets',
      description: 'Vielfältige Auswahl für jeden Geschmack',
      examples: [
        'Kalte und warme Speisen',
        'Salate und frische Beilagen',
        'Dessert-Variationen',
        'Vegetarische und vegane Optionen'
      ]
    },
    {
      title: 'Events & Feiern',
      description: 'Maßgeschneiderte Lösungen für Ihren Anlass',
      examples: [
        'Hochzeiten und Familienfeiern',
        'Firmenevents und Geschäftsanlässe',
        'Private Dinner-Partys',
        'Saisonale Spezialitäten'
      ]
    }
  ];
} 