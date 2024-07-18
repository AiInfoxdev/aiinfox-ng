import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-datascience',
  templateUrl: './datascience.component.html',
  styleUrl: './datascience.component.scss'
})
export class DatascienceComponent {
  constructor(private global: GlobalService ) { }
}
