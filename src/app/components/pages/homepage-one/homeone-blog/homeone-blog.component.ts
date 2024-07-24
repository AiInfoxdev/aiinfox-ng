import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-blog',
    templateUrl: './homeone-blog.component.html',
    styleUrls: ['./homeone-blog.component.scss']
})
export class HomeoneBlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            subTitle: "Our Blog",
            title: 'Latest Valuable Insights',
            paragraphText: ''
        }
    ]
    singleBlogPost: blogPostContent[] = [
        {
            postImg: 'assets/img/blog/img1.jpg',
            postTitle: 'Discover How Top AI Development Companies in Mohali are Revolutionizing the Future of Industries?',
            postLink: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Manjeet',
            alt: 'AI Development Companies in Mohali'
        },
        {
            postImg: 'assets/img/blog/img2.jpg',
            postTitle: 'Elevate Your Brand with A Top-Notch Web Design Company',
            postLink: 'elevate-your-brand-with-a-top-notch-web-design-company',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Manjeet',
            alt: 'Web Design Company in Mohali'
        },
        {
            postImg: 'assets/img/blog/img3.jpg',
            postTitle: 'How to Choose the Best Mobile App Development Company in Mohali?',
            postLink: 'how-to-choose-the-best-mobile-app-development-company-in-mohali',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'Manjeet',
            alt: 'Mobile App Development Company in Mohali'
        }
    ]

}
class sectionTitleContent {
    subTitle : string;
    title : string;
    paragraphText : string;
}
class blogPostContent {
    postImg : string;
    postLink : string;
    postTitle : string;
    postDate : string;
    postAuthorImage : string;
    postAuthorName : string;
    alt: string;
}