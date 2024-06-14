import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-services',
    templateUrl: './homeone-services.component.html',
    styleUrls: ['./homeone-services.component.scss']
})
export class HomeoneServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: 'Our Services',
            title: 'We Offer Professional Solutions For Business',
            paragraphText: 'We are constantly working with a vision in mind to transform the power of Artificial Intelligence for an enhanced future.'
        }
    ]
    singleServicesBox: ServicesBoxContent[] = [
        {
            icon: 'assets/img/services/icon1.png',
            title: 'AI & Machine Learning ',
            paragraphText: 'We offer exclusive services of AI and Machine Learning services. By implementing this technology, we can create more interactive and intuitive designs resulting in improved user experience, enhanced functionality, and provide personalized experiences.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon2.png',
            title: 'Generative AI  ',
            paragraphText: 'We are exclusive providers of generative AI services. Our team is highly skilled in generative AI services that greatly help create certain types of images, text, and videos. We use machine-learning models to generate outputs that impersonate human creativity.',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon3.png',
            title: 'Mobile App Development ',
            paragraphText: ' We specialize in mobile app development. Understanding and analyzing the needs and requirements of clients and providing the best solution for mobile app development. We have expertise in cross-platform app development and provide the best services. ',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon4.png',
            title: 'Data Science ',
            paragraphText: 'Our team is efficient in data science and analyzes the data efficiently. It is a powerful tool that is greatly helpful in predicting customer behaviour, and trends and identifying new opportunities. It acts as a tool for helping businesses with product development and marketing. ',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon5.png',
            title: 'Web Development',
            paragraphText: 'We have a team of proficient web developers who offer customized, fully integrated, and scalable web development solutions within the specified time frame. The main highlights of our services are website security, smart application architecture, and cost savings. ',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        },
        {
            icon: 'assets/img/services/icon6.png',
            title: 'Digital Marketing',
            paragraphText: 'Our digital marketing team is known to establish the online presence of new businesses and navigate the competitive digital landscape. Our expert digital marketers are exceptionally skilled in driving the right audience to achieve desirable results. ',
            link: 'services-details',
            linkText: 'Read More',
            linkIcon: 'flaticon-right'
        }
    ]
    loadMoreBtn: loadMore[] = [
        {
            link: 'services',
            linkText: 'Load More',
            linkIcon: 'flaticon-refresh'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class ServicesBoxContent {
    icon : string;
    title : string;
    paragraphText : string;
    link : string;
    linkText : string;
    linkIcon : string;
}
class loadMore {
    link : string;
    linkText : string;
    linkIcon : string;
}