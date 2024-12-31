import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService, ContactForm } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.errorMessage = '';

    this.emailService.sendContactForm(this.formData).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.formData = {
          name: '',
          email: '',
          phone: '',
          eventType: '',
          message: ''
        };
      },
      error: (error) => {
        this.submitStatus = 'error';
        this.errorMessage = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per Telefon oder E-Mail.';
        console.error('Form submission error:', error);
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
