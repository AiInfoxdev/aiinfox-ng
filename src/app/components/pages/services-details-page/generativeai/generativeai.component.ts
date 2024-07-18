import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-generativeai',
  templateUrl: './generativeai.component.html',
  styleUrl: './generativeai.component.scss'
})
export class GenerativeaiComponent {
  constructor(private global: GlobalService ) { }
}
