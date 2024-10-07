import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateNewJobComponent } from './components/create-new-job/create-new-job.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { JobseekerComponent } from './components/jobseeker/jobseeker.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateNewJobComponent,
    HomeComponent,
    JobDetailsComponent,
    JobListingComponent,
    JobsComponent,
    MyJobsComponent,
    RegistrationComponent,
    JobseekerComponent,
    UserDetailsComponent,
    PnfComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
