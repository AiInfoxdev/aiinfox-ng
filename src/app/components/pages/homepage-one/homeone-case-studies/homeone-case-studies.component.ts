import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-case-studies',
    templateUrl: './homeone-case-studies.component.html',
    styleUrls: ['./homeone-case-studies.component.scss']
})
export class HomeoneCaseStudiesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleCaseStudyItem: singleCaseStudyItemContent[] = [
        {
            subTitle: 'Our Projects',
            title: 'HRMS',
            paragraphText1: 'It is a suite of software developed by us that helps organizations manage internal human resource functions. ',
            paragraphText2: 'It is loaded with tons of features that help human resource personnel easily and quickly automate time-consuming and tedious processes and activities.',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img1.jpg'
        },
        {
            subTitle: 'Our Projects',
            title: 'HMS',
            paragraphText1: 'The Hospital Management system is a complete integrated suite of software specially designed to carry out all medical services, inventory tracking, supply chain optimization and staff management in a smooth way.',
            paragraphText2: '',
            link: 'case-studies-details',
            linkText: 'Details More',
            linkIcon: 'flaticon-view',
            img: 'assets/img/case-study/img2.jpg'
        }
    ]

}
class singleCaseStudyItemContent {
    subTitle : string;
    title : string;
    paragraphText1 : string;
    paragraphText2 : string;
    link : string;
    linkText : string;
    linkIcon : string;
    img : string;
}