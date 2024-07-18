import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihms',
  standalone: true,
  imports: [],
  templateUrl: './aihms.component.html',
  styleUrl: './aihms.component.scss'
})
export class AihmsComponent {
  constructor(private global: GlobalService  ) { }
}
