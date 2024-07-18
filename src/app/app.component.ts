import { afterRender, Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
    title: any;
    location: any;
    routerSubscription: any;
    isLandingPage: boolean = false;

    constructor(
        private router: Router
    ) {
        afterRender(()=>{
            // runs on client / browser
            console.log("Constructor: Output is generated in both the server and the browser.");
        })
    }

    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/main.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if(this.location.includes('/landing-')) {
                this.isLandingPage = true;
            } else {
                this.isLandingPage = false;
            }
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}