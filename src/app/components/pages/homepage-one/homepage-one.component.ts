import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/_services/global.service';

@Component({
  selector: 'app-homepage-one',
  templateUrl: './homepage-one.component.html',
  styleUrls: ['./homepage-one.component.scss']
})
export class HomepageOneComponent implements OnInit {

  constructor(private global: GlobalService ) { }

  ngOnInit(): void {
  }

}
