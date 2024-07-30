import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihrms',
  standalone: true,
  imports: [],
  templateUrl: './aihrms.component.html',
  styleUrl: './aihrms.component.scss'
})
export class AihrmsComponent {
  constructor(private global: GlobalService,private route:Router ) { }

  onClickBook(){
    this.route.navigate(['/contact-us'])

  }
}
