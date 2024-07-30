import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrl: './webdesign.component.scss'
})
export class WebdesignComponent {
  constructor(private global: GlobalService ) { }
}
