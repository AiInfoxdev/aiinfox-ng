import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihrms',
  standalone: true,
  imports: [],
  templateUrl: './aihrms.component.html',
  styleUrl: './aihrms.component.scss'
})
export class AihrmsComponent {
  constructor(private global: GlobalService ) { }
}
