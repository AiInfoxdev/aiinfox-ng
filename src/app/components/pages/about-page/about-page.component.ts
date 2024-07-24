import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor(
        private metaService: Meta,
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.metaService.addTag({ property: 'og:title', content: 'About Us'});
        this.titleService.setTitle("AiINFOX:: About Us");
    }

    pageTitleArea: pageTitle[] = [
        {
            title: 'About Us'
        }
    ]

}
class pageTitle {
    title : string;
}