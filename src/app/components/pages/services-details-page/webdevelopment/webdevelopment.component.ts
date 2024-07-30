import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrl: './webdevelopment.component.scss'
})
export class WebdevelopmentComponent {
  constructor(private global: GlobalService ) { }
}
