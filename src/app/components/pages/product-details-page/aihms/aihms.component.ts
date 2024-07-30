import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aihms',
  standalone: true,
  imports: [],
  templateUrl: './aihms.component.html',
  styleUrl: './aihms.component.scss'
})
export class AihmsComponent {
  constructor(private global: GlobalService,private route:Router  ) { }

  onClickBook(){
    this.route.navigate(['/contact-us'])

  }
}
