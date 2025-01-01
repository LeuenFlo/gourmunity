import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

interface Review {
  image: string;
  text: string;
  name: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  reviews: Review[] = [
    {
      image: 'assets/images/frelechoz.jpeg',
      text: 'Mir kommen die folgenden Worte in den Sinn: Unkompliziert, Rasch, Hilfsbereit, Kompetent, Professionell, Gute Qualität, Faire Preise. Ich habe Herrn Bracher als sehr hilfsbereiten, unkomplizierten und professionellen Geschäftspartner kennen gelernt. Das Buffet war sehr schön hergerichtet, die Qualität der Speisen und Getränke war hervorragend und das alles in einem sehr fairen Preis-Leistungs-Verhältnis.',
      name: 'Dominique Emery Freléchoz'
    },
    {
      image: 'assets/images/a.g.jpeg',
      text: 'Sehr gutes und vielseitiges Angebot an Warm- und Kaltspeisen. Freundlicher und zuverlässiger Service. Es bereitet Freude, sich am Buffet bedienen zu können. Beste Empfehlung!',
      name: 'A.G.'
    },
    {
      image: 'assets/images/alclic.jpeg',
      text: 'Gourmunity übernahm das Catering für unser Firmen-Weihnachtsessen 2023 für ca. 50 Personen. Gourmunity steht für Leidenschaft und Professionalität, ist Symbol für höchste Qualität, Frische und Liebe zum Detail. Herzlichen Dank für den gelungenen Abend, wir freuen uns aufs Firmen-Essen 2024 mit Euch!',
      name: 'Alclic'
    }
  ];

  ngOnInit() {
    // Initialisierung wird in ngAfterViewInit durchgeführt
  }

  ngAfterViewInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, {
        injectStyles: [
          `
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #c3b5a7;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
          }
          `
        ],
      });
      swiperEl.initialize();
    }
  }
}
