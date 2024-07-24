import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-digitalmarketingseo',
  templateUrl: './digitalmarketingseo.component.html',
  styleUrl: './digitalmarketingseo.component.scss'
})
export class DigitalmarketingseoComponent {
  constructor(private global: GlobalService ) { }
}
