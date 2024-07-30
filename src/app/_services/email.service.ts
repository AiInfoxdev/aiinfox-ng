import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    const serviceID = 'service_b2skfyq';
    const templateID = 'template_on9vsas';
    const userID = 'ZyWVESpmjkK3_x4ZL';

    return emailjs.send(serviceID, templateID, formData, userID);
  }
}
