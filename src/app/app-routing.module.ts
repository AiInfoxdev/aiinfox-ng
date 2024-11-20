import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { HomepageOneComponent } from './components/pages/homepage-one/homepage-one.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { AimachinelearningComponent } from './components/pages/services-details-page/aimachinelearning/aimachinelearning.component';
import { GenerativeaiComponent } from './components/pages/services-details-page/generativeai/generativeai.component';
import { DigitalmarketingseoComponent } from './components/pages/services-details-page/digitalmarketingseo/digitalmarketingseo.component';
import { DatascienceComponent } from './components/pages/services-details-page/datascience/datascience.component';
import { MobileappdevelopmentComponent } from './components/pages/services-details-page/mobileappdevelopment/mobileappdevelopment.component';
import { WebdesignComponent } from './components/pages/services-details-page/webdesign/webdesign.component';
import { WebdevelopmentComponent } from './components/pages/services-details-page/webdevelopment/webdevelopment.component';
import { AichatbotComponent } from './components/pages/product-details-page/aichatbot/aichatbot.component';
import { AihmsComponent } from './components/pages/product-details-page/aihms/aihms.component';
import { AihrmsComponent } from './components/pages/product-details-page/aihrms/aihrms.component';
import { AiMlDevelopmentComponent } from './landingpages/ai-ml-development/ai-ml-development.component';
import { TermsAndConditionsComponent } from './components/common/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/common/privacy-policy/privacy-policy.component';
import { DubaiLandingPageComponent } from './landingpages/dubai-landing-page/dubai-landing-page.component';

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
    {path: 'Landing-page', component: DubaiLandingPageComponent},
    // {path: 'services-details', component: ServicesDetailsPageComponent},
    //Blog URLs
    // {path: 'discover-how-top-ai-development-companies-in-mohali-are-revolutionizing-the-future-of-industries', component: DiscoverhowtopaiComponent},
    // {path: 'gallery', component: GalleryPageComponent},
    // {path: 'courses', component: CoursesPageComponent},
    {path: 'ai-hrms', component: AihrmsComponent},
    {path: 'ai-hms', component: AihmsComponent},
    {path: 'ai-chatbot', component: AichatbotComponent},
    {path: 'landing-ai-ml-development', component: AiMlDevelopmentComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
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