import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Hier können wir später die E-Mail-Funktionalität implementieren
    console.log('Form submitted:', this.formData);
    
    // Formular zurücksetzen
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
