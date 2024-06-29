import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-ml-development',
  templateUrl: './ai-ml-development.component.html',
  styleUrl: './ai-ml-development.component.scss'
})
export class AiMlDevelopmentComponent {

  aboutImage = [
    {
        img: 'assets/img/about/img1.png'
    }
  ];

  aboutContent = [
    {
        subTitle: 'Our Values ',
        title: 'Transform Ideas into Intelligent Algorithms. Get Custom AI/ML Solutions & Expert Developers',
        paragraphText1: 'We stick to our core values and work accordingly to deliver the best results.',
        paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Book A 30 Minute Consultation',
        defaultBtnLink: 'about-us'
    }
  ];

  featuresList = [
    {
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
        title: 'Hire top 1% AI/ML development talent ',
        subTitle: 'On the market'
    },
    {
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
        title: '12+ years experience, 500+ professionals ',
        subTitle: 'Team members'
    },
    {
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
        title: 'Save up to 50% on development cost ',
        subTitle: 'Satisfaction rate'
    },
    {
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRMMTIuNSAxOS41TDIzIDkiIHN0cm9rZT0iIzNDQzA2NSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE0LjUiIGN5PSIxNC41IiByPSIxNCIgc3Ryb2tlPSIjM0NDMDY1Ii8+Cjwvc3ZnPgo=',
        title: 'One week free trial ',
        subTitle: 'Senior scientist'
    },
  ];

  // This is the data for the services section
  sectionTitle = [
    {
        subTitle: 'Our Services',
        title: 'We Offer Professional Solutions For Business',
        paragraphText: 'We are constantly working with a vision in mind to transform the power of Artificial Intelligence for an enhanced future.'
    }
  ]
  singleServicesBox = [
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
  loadMoreBtn = [
      {
          link: 'services',
          linkText: 'Load More',
          linkIcon: 'flaticon-refresh'
      }
  ];

  accordionItems = {};

  singleCaseStudyItem = [
    {
        subTitle: 'Our Projects',
        title: "They're very willing to assemble the team that we ask for if we have certain preferences.",
        paragraphText1: 'James Burke',
        paragraphText2: 'Managing Partner, Consensus Interactive',
        link: 'case-studies-details',
        linkText: 'Details More',
        linkIcon: 'flaticon-view',
        img: 'assets/img/user6.jpg'
    },
    {
        subTitle: 'Our Projects',
        title: '"The workflow between our team and theirs was excellent."',
        paragraphText1: 'James Burke',
        paragraphText2: 'Managing Partner, Consensus Interactive',
        link: 'case-studies-details',
        linkText: 'Details More',
        linkIcon: 'flaticon-view',
        img: 'assets/img/user3.jpg'
    }
  ];

  sectionTitleContact = [
    {
        subTitle: "Get In Touch",
        title: 'What Can We Help You With?',
        paragraphText: 'Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality & Same Day Response Guaranteed!'
    }
  ]
  contactImage = [
      {
          img: 'assets/img/contact.png'
      }
  ]

}
