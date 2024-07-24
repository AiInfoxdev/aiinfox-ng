import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    private apiUrl = 'https://api.example.com';

    constructor(
        private http: HttpClient
    ) { }

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
            postImg: 'assets/img/blog/img4.jpg',
            postTitle: 'The Data Surrounding Higher Education',
            postLink: 'blog-details',
            postDate: 'April 30, 2024',
            postAuthorImage: 'assets/img/user1.jpg',
            postAuthorName: 'Alex Morgan',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries1',
        },
        {
            postImg: 'assets/img/blog/img5.jpg',
            postTitle: 'Conversion Rate the Sales Funnel Optimization',
            postLink: 'blog-details',
            postDate: 'April 28, 2024',
            postAuthorImage: 'assets/img/user2.jpg',
            postAuthorName: 'Sarah Taylor',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries2',
        },
        {
            postImg: 'assets/img/blog/img6.jpg',
            postTitle: 'Business Data is changing the world’s Energy',
            postLink: 'blog-details',
            postDate: 'April 27, 2024',
            postAuthorImage: 'assets/img/user3.jpg',
            postAuthorName: 'David Warner',
            path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries3',
        },
        // {
        //     postImg: 'assets/img/blog/img7.jpg',
        //     postTitle: 'The data-driven approach to understanding',
        //     postLink: 'blog-details',
        //     postDate: 'April 30, 2024',
        //     postAuthorImage: 'assets/img/user1.jpg',
        //     postAuthorName: 'Alex Morgan',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries4',
        // },
        // {
        //     postImg: 'assets/img/blog/img8.jpg',
        //     postTitle: 'Finding the blocks of neighboring fields',
        //     postLink: 'blog-details',
        //     postDate: 'April 28, 2024',
        //     postAuthorImage: 'assets/img/user2.jpg',
        //     postAuthorName: 'Sarah Taylor',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries5',
        // },
        // {
        //     postImg: 'assets/img/blog/img9.jpg',
        //     postTitle: 'Data into Your Enterprise to Drive Insights',
        //     postLink: 'blog-details',
        //     postDate: 'April 27, 2024',
        //     postAuthorImage: 'assets/img/user3.jpg',
        //     postAuthorName: 'David Warner',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries6',
        // },
        // {
        //     postImg: 'assets/img/blog/img10.jpg',
        //     postTitle: 'Introduction to Recommendation Engines',
        //     postLink: 'blog-details',
        //     postDate: 'April 30, 2024',
        //     postAuthorImage: 'assets/img/user1.jpg',
        //     postAuthorName: 'Alex Morgan',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries7',
        // },
        // {
        //     postImg: 'assets/img/blog/img11.jpg',
        //     postTitle: '5 Things You Should Know About Data',
        //     postLink: 'blog-details',
        //     postDate: 'April 28, 2024',
        //     postAuthorImage: 'assets/img/user2.jpg',
        //     postAuthorName: 'Sarah Taylor',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries8',
        // },
        // {
        //     postImg: 'assets/img/blog/img12.jpg',
        //     postTitle: 'Which Language to Choose for Deep Learning?',
        //     postLink: 'blog-details',
        //     postDate: 'April 27, 2024',
        //     postAuthorImage: 'assets/img/user3.jpg',
        //     postAuthorName: 'David Warner',
        //     path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries9',
        // }
    ];

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