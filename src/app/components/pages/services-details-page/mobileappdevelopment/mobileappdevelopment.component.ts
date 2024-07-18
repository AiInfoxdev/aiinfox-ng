import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-mobileappdevelopment',
  templateUrl: './mobileappdevelopment.component.html',
  styleUrl: './mobileappdevelopment.component.scss'
})
export class MobileappdevelopmentComponent {
  constructor(private global: GlobalService ) { }
}
