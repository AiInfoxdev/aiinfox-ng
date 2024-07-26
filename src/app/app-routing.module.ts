import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { CaseStudiesThreeColumnsPageComponent } from './components/pages/case-studies-three-columns-page/case-studies-three-columns-page.component';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { HomepageTwoComponent } from './components/pages/homepage-two/homepage-two.component';
import { HomepageThreeComponent } from './components/pages/homepage-three/homepage-three.component';
import { HomepageFourComponent } from './components/pages/homepage-four/homepage-four.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CaseStudiesDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { CoursesPageComponent } from './components/pages/courses-page/courses-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { AimachinelearningComponent } from './components/pages/services-details-page/aimachinelearning/aimachinelearning.component';
import { GenerativeaiComponent } from './components/pages/services-details-page/generativeai/generativeai.component';
import { DigitalmarketingseoComponent } from './components/pages/services-details-page/digitalmarketingseo/digitalmarketingseo.component';
import { DatascienceComponent } from './components/pages/services-details-page/datascience/datascience.component';
import { MobileappdevelopmentComponent } from './components/pages/services-details-page/mobileappdevelopment/mobileappdevelopment.component';
import { WebdesignComponent } from './components/pages/services-details-page/webdesign/webdesign.component';
import { WebdevelopmentComponent } from './components/pages/services-details-page/webdevelopment/webdevelopment.component';
import { DiscoverhowtopaiComponent } from './components/pages/blog-details-page/discoverhowtopai/discoverhowtopai.component';
import { AichatbotComponent } from './components/pages/product-details-page/aichatbot/aichatbot.component';
import { AihmsComponent } from './components/pages/product-details-page/aihms/aihms.component';
import { AihrmsComponent } from './components/pages/product-details-page/aihrms/aihrms.component';
import { AiMlDevelopmentComponent } from './landingpages/ai-ml-development/ai-ml-development.component';
import { GenAiDevelopmentComponent } from './landingpages/gen-ai-development/gen-ai-development.component';

const routes: Routes = [
    {path: '', component: HomepageOneComponent},
    // {path: 'home-two', component: HomepageTwoComponent},
    // {path: 'home-three', component: HomepageThreeComponent},
    // {path: 'home-four', component: HomepageFourComponent},
    {path: 'about-us', component: AboutPageComponent},
    // {path: 'team', component: TeamPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'ai-machine-learning', component: AimachinelearningComponent},
    {path: 'generative-ai', component: GenerativeaiComponent},
    {path: 'digital-marketing-seo', component: DigitalmarketingseoComponent},
    {path: 'data-science', component: DatascienceComponent},
    {path: 'mobile-app-development', component: MobileappdevelopmentComponent},
    {path: 'web-design', component: WebdesignComponent},
    {path: 'web-development', component: WebdevelopmentComponent},
    // {path: 'services-details', component: ServicesDetailsPageComponent},
    //Blog URLs
    // {path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries', component: DiscoverhowtopaiComponent},
    // {path: 'gallery', component: GalleryPageComponent},
    // {path: 'courses', component: CoursesPageComponent},
    {path: 'ai-hrms', component: AihrmsComponent},
    {path: 'ai-hms', component: AihmsComponent},
    {path: 'ai-chatbot', component: AichatbotComponent},
    //{path: 'landing-ai-ml-developement', component: AiMlDevelopmentComponent},
    //{path: 'landing-gen-ai-development', component: GenAiDevelopmentComponent},
    // {path: 'courses-details', component: CoursesDetailsPageComponent},
    // {path: 'events', component: EventsPageComponent},
    // {path: 'events-details', component: EventsDetailsPageComponent},
    // {path: 'case-studies-3-columns', component: CaseStudiesThreeColumnsPageComponent},
    // {path: 'case-studies-details', component: CaseStudiesDetailsPageComponent},
    {path: 'error', component: ErrorPageComponent},
    // {path: 'faq', component: FaqPageComponent},
    {path: 'blog', component: BlogPageComponent},
    // {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    
    // Here add new component
    
    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }