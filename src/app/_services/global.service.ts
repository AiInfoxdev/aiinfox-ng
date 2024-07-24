import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DiscoverhowtopaiComponent } from '../components/pages/blog-details-page/discoverhowtopai/discoverhowtopai.component';
import { BlogDetailsPageComponent } from '../components/pages/blog-details-page/blog-details-page.component';
import { ConversionrateComponent } from '../components/pages/blog-details-page/Conversionrate/conversionrate.component';
import { BusinessdataComponent } from '../components/pages/blog-details-page/Businessdata/businessdata.component';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private apiUrl = 'https://api.example.com';

    constructor(
        private http: HttpClient,
        private router: Router,
        private metaService: Meta,
        private titleService: Title
    ) {
        this,router.events.subscribe((val) => {
            if(val instanceof NavigationEnd) {
                this.metaService.removeTag('name="keywords"');
                this.metaService.removeTag('name="description"');
                this.metaService.addTags([
                    { name: 'keywords', content: this.currentPageMETA?.keywords },
                    { name: 'description', content: this.currentPageMETA?.description }
                ]);
                this.titleService.setTitle(this.currentPageMETA?.title);
            }
        });
    }

    newBlogData = [
        {
            id: 1,
            title: 'Discover How Top AI Development Companies in Mohali Are Revolutionizing the Future of Industries',
            date: 'April 16, 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'assets/img/blog/1.jpg',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries'
        }
    ];

    blogDataOrig: any[] = [
        {
            postImg: 'assets/img/blog/aiblog.jpg',
            postTitle: 'Discover How Top AI Development Companies in Mohali are Revolutionizing the Future of Industries?',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries',
            component: DiscoverhowtopaiComponent
        },
        {
            postImg: 'assets/img/blog/designus.jpg',
            postTitle: 'Elevate Your Brand with A Top-Notch Web Design Company',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Sarah Taylor',
            path: 'elevate-your-brand-with-a-top-notch-web-design-company',
            component: ConversionrateComponent
        },
        {
            postImg: 'assets/img/blog/mobileapp.jpg',
            postTitle: 'How to Choose the Best Mobile App Development Company in Mohali?',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'David Warner',
            path: 'how-to-choose-the-best-mobile-app-development-company-in-mohali',
            component: BusinessdataComponent 
        },
        {
            postImg: 'assets/img/blog/img7.jpg',
            postTitle: 'The data-driven approach to understanding',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries4',
            component: BlogDetailsPageComponent
        },
        {
            postImg: 'assets/img/blog/img8.jpg',
            postTitle: 'Finding the blocks of neighboring fields',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries5',
            component: BlogDetailsPageComponent
        },
        {
            postImg: 'assets/img/blog/img9.jpg',
            postTitle: 'Data into Your Enterprise to Drive Insights',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries6',
            component: BlogDetailsPageComponent
        },
        {
            postImg: 'assets/img/blog/img10.jpg',
            postTitle: 'Introduction to Recommendation Engines',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries7',
            component: BlogDetailsPageComponent
        },
        {
            postImg: 'assets/img/blog/img11.jpg',
            postTitle: '5 Things You Should Know About Data',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries8',
            component: BlogDetailsPageComponent
        },
        {
            postImg: 'assets/img/blog/img12.jpg',
            postTitle: 'Which Language to Choose for Deep Learning?',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries9',
            component: BlogDetailsPageComponent
        }
    ];

    get currentPageMETA(): any {
        switch (window.location.pathname) {
            case '/':
                return {
                    title: 'Top AI development company in Mohali and Chandigarh: AiInfox',
                    description: 'AiInfox is among the top AI development companies in Mohali that offer cost-effective services including Web and App development, digital marketing and more.',
                    keywords: 'AI Development Company in Mohali, AI services in Mohali, AI and machine learning services, Top AI companies in Mohali, future of AI in Mohali'
                };
            case '/ai-machine-learning':
                return {
                    title: 'Top Provider of AI and Machine Learning Services: AiInfox',
                    description: 'AiInfox, a leading AI and machine learning development company, provides high-quality AI and ML services, utilizing AI power to make the best decisions.',
                    keywords: 'Machine learning development company, AI and ML services, AI and Machine Learning'
                };
            case '/data-science':
                return {
                    title: 'Top Data Science Companies in Mohali | AiInfox Analytics',
                    description: 'Explore AiInfox for company data analysis. Leading among data science companies in Mohali, we develop the value of your data.',
                    keywords: 'Data science companies in Mohali'
                };
            case '/generative-ai':
                return {
                    title: 'Powered Your Innovation Journey with AWS Generative AI Services',
                    description: 'Discover how AiInfox&#39;s AWS-based generative AI services may help your business reach new heights. Explore cutting-edge commercial applications now.',
                    keywords: 'Data science companies in Mohali'
                };
            case '/mobile-app-development':
                return {
                    title: 'Top Mobile App Development Company in Mohali | AiInfox',
                    description: 'Empower your business with AiInfox, the top app development company in Mohali. Explore expert app development services in Mohali for mobile app solutions.',
                    keywords: 'App development company in Mohali, app development services in Mohali'
                };
            case '/web-development':
                return {
                    title: 'Top Web Development Company in Mohali | AiInfox',
                    description: 'AiInfox, the top web development company in Mohali, offers experienced website development services in Mohali. Increase your online visibility today!',
                    keywords: 'Top Web development company in Mohali, website development services in Mohali'
                };
            case '/web-design':
                return {
                    title: 'Craft Your Vision: Customized Web Design Services.',
                    description: 'Enhance your brand with AiInfox&#39;s best web design services in Mohali. Our experts provide planning and creative designs to ensure your online success.',
                    keywords: 'Best web design services in Mohali, Best Web design company in Mohali'
                };
            case '/digital-marketing-seo':
                return {
                    title: 'Best Digital Marketing Company in Mohali - AiInfox',
                    description: 'Explore AiInfox, the best digital marketing company in Mohali, offering top-notch SEO services, social media marketing services, and comprehensive digital marketing services.',
                    keywords: 'Best digital marketing company in Mohali, Digital marketing services'
                };
            case '/ai-hrms':
                return {
                    title: 'AiInfox: AI HRMS and In-depth HR Management Systems.',
                    description: 'Explore AiInfox advanced AI HRMS and inclusive human resource management system, with an integrated HR and payroll system.',
                    keywords: 'AI HRMS, Human Resource Management system, HR and payroll system'
                };
            case '/ai-hms':
                return {
                    title: 'AiInfox: Advanced AI HMS Software for Hospitals',
                    description: 'Explore AiInfox advanced AI HMS software, designed for an effective hospital management system. Optimize your healthcare operations with ease.',
                    keywords: 'AI HMS, Best Hospital Management System, HMS Software'
                };
            case '/ai-chatbot':
                    return {
                        title: 'Enhance customer interaction with AiInfox AI Chatbot Software.',
                        description: 'Discover AiInfox powerful AI chatbot software, which provides seamless customer engagement and an improved user experience. Explore our solutions now!',
                        keywords: 'AI Chatbot, ChatBot software'
                    };
            case '/about-us':
                return {
                    title: 'About AiInfox: Company Overview And Mission',
                    description: 'Explore AiInfox About Us page for a detailed company overview and mission statement. Learn about our values and commitment to innovation.',
                    keywords: 'about us, company overview'
                };
            case '/services':
                return {
                    title: 'Services',
                    description: 'Services Description',
                    keywords: 'Services Keywords'
                };
            case '/contact':
                return {
                    title: 'Contact Us for Custom AI Solutions',
                    description: 'Explore the ideal AI solutions to encourage innovative ideas. To discuss your project requirements with India top AI specialists, get in touch with us.',
                    keywords: 'Custom AI solution, Contact us'
                };
            case '/blog':
                return {
                    title: 'Blog',
                    description: 'Blog Description',
                    keywords: 'Blog Keywords'
                };
            case '/blog-details':
                return {
                    title: 'Blog Details',
                    description: 'Blog Details Description',
                    keywords: 'Blog Details Keywords'
                };
        }
    }

    set currentPageMETA(data: any) {
        document.title = data.title;
        const meta = document.getElementsByTagName('meta');
        for (let i = 0; i < meta.length; i++) {
            if (meta[i].getAttribute('name') === 'description') {
                meta[i].setAttribute('content', data.description);
            }
            if (meta[i].getAttribute('name') === 'keywords') {
                meta[i].setAttribute('content', data.keywords);
            }
        }
    }

    getBlogData(): Observable<any> {
        return of(this.blogDataOrig);
    }

    getData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/data`);
    }

    postData(data: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/data`, data);
    }

    updateData(id: number, data: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/data/${id}`, data);
    }

    deleteData(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/data/${id}`);
    }
}