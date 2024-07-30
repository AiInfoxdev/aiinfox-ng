import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aichatbot',
  standalone: true,
  imports: [],
  templateUrl: './aichatbot.component.html',
  styleUrl: './aichatbot.component.scss'
})
export class AichatbotComponent implements OnInit{
  @ViewChild('classroomChatbotSection', { static: true }) classroomChatbotSection!: ElementRef;
  @ViewChild('interviewChatbotSection', { static: true }) interviewChatbotSection!: ElementRef;
  constructor(private route:Router,private router: ActivatedRoute  ) { }
  

    ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
          const section = params['section'];
          if (section === 'classroom-chatbot') {
              this.scrollToSection(this.classroomChatbotSection);
          } else if (section === 'interview-chatbot') {
              this.scrollToSection(this.interviewChatbotSection);
          }
      });
  }


  scrollToSection(section: ElementRef): void {
    if(section){
      section.nativeElement.scrollIntoView({ behavior: 'smooth' });

    }
  }
  

  onClickBook(){
    this.route.navigate(['/contact-us'])

  }

}
