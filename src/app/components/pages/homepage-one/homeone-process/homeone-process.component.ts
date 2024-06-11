import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-process',
    templateUrl: './homeone-process.component.html',
    styleUrls: ['./homeone-process.component.scss']
})
export class HomeoneProcessComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Our Process",
            title: 'Our Course of Action ',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
        }
    ]
    singleProcessBox: processBoxContent[] = [
        {
            img: 'assets/img/process/img1.png',
            title: 'Data-Driven Decisions ',
            paragraphText: 'By employing advanced data-driven models, data-driven decision-making is enhanced greatly. AI models are generally computer program tasks that require human intelligence, including prediction, classification, recommendation, and natural language processing',
            number: '1'
        },
        {
            img: 'assets/img/process/img2.png',
            title: 'Augmented Human Intelligence ',
            paragraphText: 'To achieve better results, human intelligence along with Artificial Intelligence. With the help of AI, humans may influence strength by weighing down their limitations resulting in higher productivity while minimizing errors.',
            number: '2'
        },
        {
            img: 'assets/img/process/img3.png',
            title: 'Objectivity and Transparency ',
            paragraphText: 'When it comes to AI, objectivity, and transparency hold important value. AI algorithm ensures there is no biasedness and no human error. The outcome will help mitigate operational risks. ',
            number: '3'
        },
        {
            img: 'assets/img/process/img4.png',
            title: 'Innovation Velocity and Operational Efficiency ',
            paragraphText: 'Innovation velocity and operational efficiency are unlocked at an accelerated pace through the integration of AI. Utilizing various tools to expedite hypothesis testing, data analysis, and scenario simulation, we drive innovation and enhance operations, achieving optimal efficiency. ',
            number: '4'
        },
        {
            img: 'assets/img/process/img5.png',
            title: 'Future-Proofing Your Enterprise',
            paragraphText: 'At AiInfox, we have exclusive expertise in AI. As a leading company, we provide expert solutions that give your business a competitive edge, enabling it to navigate and guard against the evolving dynamics of the future market.  ',
            number: '5'
        },
        {
            img: 'assets/img/process/img6.png',
            title: 'Communicate Results',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            number: '6'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class processBoxContent {
    img : string;
    title : string;
    paragraphText : string;
    number : string;
}