import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-testimonials',
    templateUrl: './homeone-testimonials.component.html',
    styleUrls: ['./homeone-testimonials.component.scss']
})
export class HomeoneTestimonialsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Testimonials",
            title: 'What Our Clients Are Saying?',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleTestimonialsItem: TestimonialsItemContent[] = [
        {
            paragraphText: 'It was great to work with AiInfox. He completed all the tasks on time and was very responsive.',
            clientImg: 'assets/img/testimonials/img1.jpg',
            clientName: 'Aleksandre Deriugini',
            clientDesignation: 'CEO at EnvyTheme'
        },
        {
            paragraphText: 'It was great to work with AiInfox. He completed all the tasks on time and was very responsive.',
            clientImg: 'assets/img/testimonials/img2.jpg',
            clientName: 'David Warner',
            clientDesignation: 'CEO at Envato'
        },
        {
            paragraphText: 'It was great to work with AiInfox. He completed all the tasks on time and was very responsive.',
            clientImg: 'assets/img/testimonials/img3.jpg',
            clientName: 'Sarah Taylor',
            clientDesignation: 'CEO at ThemeForest'
        }
    ]
    testimonialsBtn: Btn[] = [
        {
            link: "/",
            icon: 'flaticon-view',
            text: 'Check Out All Reviews'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class TestimonialsItemContent {
    paragraphText : string;
    clientImg : string;
    clientName : string;
    clientDesignation : string;
}
class Btn {
    link : string;
    icon : string;
    text : string;
}