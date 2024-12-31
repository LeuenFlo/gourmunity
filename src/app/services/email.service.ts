import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

declare const emailjs: any;

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceId = 'service_vbmovqj';
  private readonly templateId = 'template_l3b88lj';
  private readonly publicKey = 'a3uOiUzM40dCfsMus';

  constructor() {
    emailjs.init({
      publicKey: this.publicKey
    });
  }

  sendContactForm(formData: ContactForm): Observable<any> {
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      message: formData.message
    };

    return from(
      emailjs.send(this.serviceId, this.templateId, templateParams)
    );
  }
} 