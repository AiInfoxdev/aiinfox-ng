import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-process',
    templateUrl: './homeone-process.component.html',
    styleUrls: ['./homeone-process.component.scss']
})
export class HomeoneProcessComponent implements OnInit, AfterViewInit {

    @Input('section') section: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        if(this.section === 'aboutus') {
            this.sectionTitle = [
                {
                    subTitle: "Fly High with AiInfox",
                    title: 'Why AiInfox',
                    paragraphText: 'AiInfox is becoming stronger day by day and every team member who is thorough and professional is contributing towards the company success'
                }
            ];

            this.singleProcessBox = [
                {
                    img: 'assets/img/process/img1.png',
                    title: ' We Know Your Business ',
                    paragraphText: 'We save your business from unnecessary problems and challenges that can arise!  ',
                    number: '1'
                },
                {
                    img: 'assets/img/process/img2.png',
                    title: 'Promote Your Business ',
                    paragraphText: 'As we know everything about your business, we will combine our tools and technologies to make you reach newer heights.  ',
                    number: '2'
                },
                {
                    img: 'assets/img/process/img3.png',
                    title: 'Worth a Smart Investment  ',
                    paragraphText: 'Hiring AiInfox for economical and convenient ways to achieve your targets by employing transparent and affordable services.  ',
                    number: '3'
                },
                {
                    img: 'assets/img/process/img4.png',
                    title: 'One-Stop Destination for All-In-One Marketing Team ',
                    paragraphText: 'AiInfox provides a complete package of all-in-one marketing services combined with extensive experience and expertise.  ',
                    number: '4'
                }
            ]
        }

        if(this.section === 'home') {

            this.sectionTitle = [
                {
                    subTitle: "Our Process",
                    title: 'Our Course of Action ',
                    paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                }
            ];

            this.singleProcessBox = [
                {
                    img: 'assets/img/process/img1.png',
                    title: 'Data-Driven Decisions ',
                    paragraphText: 'By employing advanced data-driven models, data-driven decision-making is enhanced greatly. AI models are generally computer program tasks that require human intelligence, including prediction, classification, recommendation, and natural language processing. ',
                    number: '1'
                },
                {
                    img: 'assets/img/process/img2.png',
                    title: 'Augmented Human Intelligence ',
                    paragraphText: 'To achieve better results, using human intelligence along with Artificial Intelligence is now possible. With the help of AI, humans may influence strength by weighing down their limitations resulting in higher productivity while minimizing errors. ',
                    number: '2'
                },
                {
                    img: 'assets/img/process/img3.png',
                    title: 'Objectivity and Transparency ',
                    paragraphText: 'When it comes to AI, objectivity, and transparency hold important value. AI algorithm ensures there is no biasedness and no human error. The outcome will help mitigate operational risks and provide the best possible results.  ',
                    number: '3'
                },
                {
                    img: 'assets/img/process/img4.png',
                    title: 'Innovation Velocity and Operational Efficiency ',
                    paragraphText: 'Innovation velocity and operational efficiency are unlocked at an accelerated pace through the integration of AI. Utilizing various tools to expedite hypothesis testing, data analysis, and scenario simulation, we drive innovation and enhance operations, achieving optimal efficiency within the given time frame.  ',
                    number: '4'
                },
                {
                    img: 'assets/img/process/img5.png',
                    title: 'Future-Proofing Your Enterprise',
                    paragraphText: 'At AiInfox, we have exclusive expertise in AI. As a leading company, we provide expert solutions that give your business a competitive edge, enabling it to navigate and guard against the evolving dynamics of the future market. You can easily engage with customers, and identify the patterns easily.   ',
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
    }

    sectionTitle: sectionTitleContent[] = [];
    singleProcessBox: processBoxContent[] = [];

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