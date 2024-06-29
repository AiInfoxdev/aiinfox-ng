import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-landingfoo',
  templateUrl: './landingfoo.component.html',
  styleUrl: './landingfoo.component.scss',
})
export class LandingfooComponent implements OnInit {

  location: any;
  footerClass: any = 'footer-area bg-fffaf3';

  constructor(
      private router: Router,
  ) {
      this.router.events
      .subscribe((event) => {
          if ( event instanceof NavigationEnd ) {
              this.location = this.router.url;
              if (this.location == '/home-two' || this.location == '/home-four' || this.location == '/services-details' || this.location == '/events-details' || this.location == '/courses' || this.location == '/courses-details' || this.location == '/landing-ai-ml-developement'){
                  this.footerClass = 'footer-area';
              } else if(this.location == '/about-us') {
                  this.footerClass = 'footer-area bg-fffaf3';
              } else {
                  this.footerClass = 'footer-area bg-color';
              }
          }
      });
  }

  ngOnInit(): void { }

}
