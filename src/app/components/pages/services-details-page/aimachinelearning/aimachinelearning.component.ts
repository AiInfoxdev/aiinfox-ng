import { Component } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-aimachinelearning',
  templateUrl: './aimachinelearning.component.html',
  styleUrl: './aimachinelearning.component.scss'
})
export class AimachinelearningComponent {

  constructor(private global: GlobalService ) { }
}
