import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent: Content[] = [
        {
            title: 'WHERE AI & INNOVATION COLLIDE',
            paragraphText: 'Make your life lively, relaxing, and more pleasant with the most powerful technology of the future. As among the top AI development companies in Mohali, we prioritize ethical considerations that play an important role in automation and artificial intelligence with much-needed vigilant planning and accountable development. ',
            defaultBtnIcon: 'flaticon-structure',
            defaultBtnText: 'About Us',
            defaultBtnLink: 'about-us',
            videoBtnIcon: 'flaticon-google-play',
            videoBtnText: 'Watch Video',
            videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
        }
    ]

}
class Content {
    title : string;
    paragraphText : string;
    defaultBtnIcon : string;
    defaultBtnText: string;
    defaultBtnLink : string;
    videoBtnIcon : string;
    videoBtnText: string;
    videoBtnLink : string;
}