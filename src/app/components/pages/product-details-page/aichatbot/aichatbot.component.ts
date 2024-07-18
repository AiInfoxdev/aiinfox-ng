import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aichatbot',
  standalone: true,
  imports: [],
  templateUrl: './aichatbot.component.html',
  styleUrl: './aichatbot.component.scss'
})
export class AichatbotComponent {
  constructor(private global: GlobalService ) { }
}
