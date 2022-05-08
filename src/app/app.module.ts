import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ArgProgMainComponent } from './components/arg-prog-main/arg-prog-main.component';
import { AddAboutMeItemComponent } from './components/add-about-me-item/add-about-me-item.component';
import { AddExperienceItemComponent } from './components/add-experience-item/add-experience-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddAboutMeComponent } from './components/add-about-me/add-about-me.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [

  {path: '', component: WelcomeComponent},
  // {path: 'about', component: AboutComponent},
  {path: 'argProgMain', component: ArgProgMainComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    WelcomeComponent,
    AddAboutMeItemComponent,
    AddExperienceItemComponent,
    AddAboutMeComponent,
    AddExperienceComponent,
    ArgProgMainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,  
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
