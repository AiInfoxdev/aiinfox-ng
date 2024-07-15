import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-solutions',
    templateUrl: './solutions.component.html',
    styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Expertise ',
            title: 'We offer expertly crafted AI services tailored to exceed your expectations.',
            paragraphText: 'We are the most passionate team of innovators who are well-known for their agility, result-oriented, highly driven, motivated, and efficient. '
        }
    ]
    singleSolutionsBox: solutionsBoxContent[] = [
        {
            icon: 'assets/img/creative.png',
            title: 'AI-Powered Solutions ',
            paragraphText: 'We exclusively offer a wide array of AI-powered solutions which includes predictive analytics, natural language processing, data analysis, automation, content creation, and whatnot.',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'assets/img/intelligence.png',
            title: 'Data Science',
            paragraphText: 'We have expertise in collecting, mining, analyzing, visualization, and maintenance of information resulting in valuable insights. We help our clients get value and deep insights from their data.  ',
            link: 'services-details',
            linkText: 'View Details'
        },
        {
            icon: 'assets/img/machine.png',
            title: 'Machine Learning ',
            paragraphText: 'AiInfox can develop and implement machine learning models, which greatly helps in computerizing tasks, providing predictions, and generating creative content on its basis.  ',
            link: 'services-details',
            linkText: 'View Details'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class solutionsBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
}