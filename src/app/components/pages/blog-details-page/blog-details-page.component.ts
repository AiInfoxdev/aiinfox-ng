import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {

    constructor(
        private router: Router,
        private route:ActivatedRoute
    ) { }

    ngOnInit(): void {
        console.log(this.route.snapshot.data);
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'Blog Details',
            subTitle: 'The Challenges to Tackle Before You Start With AI'
        }
    ]

}
class pageTitle {
    title : string;
    subTitle : string;
}