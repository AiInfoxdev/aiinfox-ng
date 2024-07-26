import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aichatbot',
  standalone: true,
  imports: [],
  templateUrl: './aichatbot.component.html',
  styleUrl: './aichatbot.component.scss'
})
export class AichatbotComponent implements OnInit, AfterViewInit  {
  constructor(private route:Router  ) { }
  
  ngOnInit() {
  }

  onClickBook(){
    this.route.navigate(['/contact-us'])

  }

  ngAfterViewInit() {
    this.scrollToSection();
  }

  scrollToSection() {
    const element = document.getElementById('interview-chatbot-section');
    if (element) {
      console.log("element",element)
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
