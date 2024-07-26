import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-conversionrate',
  templateUrl: './conversionrate.component.html',
  styleUrls: ['./conversionrate.component.scss', './../blog-details-page.component.scss']
})
export class ConversionrateComponent {
  commentForm: any;
  constructor(private emailService: EmailService) { }
  ngOnInit() {
    console.log("conversion page......")
    this.initCommentForm();
  }

  initCommentForm() {
    this.commentForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      website: new FormControl(''),
      message : new FormControl(''),
      isSave: new FormControl(false)
    })
  }

  onSend() {
    this.emailService.sendEmail(this.commentForm.value).then(
      (response) => {
        console.log('Email sent successfully', response.text);
        this.commentForm.reset();
        //   alert('Email sent successfully');
      },
      (error) => {
        console.log('Failed to send email', error);
        //   alert('Failed to send email');
      }
    );

  }
}
