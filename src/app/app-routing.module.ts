import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateNewJobComponent } from './components/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MyJobsComponent } from './components/my-jobs/my-jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { JobseekerComponent } from './components/jobseeker/jobseeker.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { PnfComponent } from './components/pnf/pnf.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'user-details',component:UserDetailsComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'create-new-job',component:CreateNewJobComponent},
  {path:'job-details/:id',component:JobDetailsComponent},
  {path:'job-listing',component:JobListingComponent},
  {path:'jobs',component:JobsComponent},
  {path:'login',component:LoginComponent},
  {path:'myjobs',component:MyJobsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'jobseeker',component:JobseekerComponent},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
