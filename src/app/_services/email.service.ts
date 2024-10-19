import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { catchError, Observable } from 'rxjs';
// import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailSenderServerURL = 'https://aiinfoxmailsendervercel.vercel.app/v1/send-email';
  // private handleError: HandleError;

  constructor(
    private http: HttpClient,
    // httpErrorHandler: HttpErrorHandler
  ) {
    // this.handleError = httpErrorHandler.createHandleError('SendEmailContactForm');
  }

  sendEmail_EJS(formData: any): Promise<EmailJSResponseStatus> {
    const serviceID = 'service_b2skfyq';
    const templateID = 'template_on9vsas';
    const userID = 'ZyWVESpmjkK3_x4ZL';

    return emailjs.send(serviceID, templateID, formData, userID);
  }

  sendEmail(formData: any): Observable<any> {
    const payload = {
      recipient: 'info@aiinfox.com', 
      subject: 'Emails Are Coming From AIINFOX Website', 
      text: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
              }
              .email-container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border-radius: 8px 8px 0 0;
              }
              .content {
                padding: 20px;
                font-size: 16px;
                line-height: 1.6;
                color: #333;
              }
              .content h2 {
                color: #4CAF50;
              }
              .info-table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
              }
              .info-table th, .info-table td {
                padding: 10px;
                border: 1px solid #ddd;
                text-align: left;
              }
              .info-table th {
                background-color: #f4f4f4;
              }
              .footer {
                text-align: center;
                padding: 20px;
                font-size: 14px;
                color: #777;
                background-color: #f4f4f4;
                border-radius: 0 0 8px 8px;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="header">
                <h1>Contact Form Submission</h1>
              </div>
              <div class="content">
                <h2>Hello,</h2>
                <p>You have received a new message from the contact form on your website.</p>
                <table class="info-table">
                  <tr>
                    <th>Name</th>
                    <td>${formData.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>${formData.email}</td>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <td>AiINFOX Website</td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>${formData.message}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td>${formData.phoneNumber}</td>
                  </tr>
                </table>
              </div>
              <div class="footer">
                <p>&copy; 2024 AiINFOX. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `
    }
    return this.http.post<any[]>(this.emailSenderServerURL, payload)
      .pipe(
        // catchError(this.handleError('SendEmailContactForm', []))
      );
  }

}
