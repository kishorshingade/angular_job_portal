import { Router } from '@angular/router';
import { Component,OnInit} from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 isJobseeker: boolean = true
  constructor(private job:JobService,private router:Router) {}
  ngOnInit(): void {

  }
   register(data:any){
    const employerObj = {
      role: data.role,
      CompanyName: data.CompanyName,
      EmailId: data.EmailId,
      Password: data.Password,
      PhoneNo: data.PhoneNo,
      LogoURL: data.LogoURL,
      City: data.City,
      State: data.State,
      CompanyAddress: data.CompanyAddress,
    }

    this.job.registerEmployer(employerObj).subscribe((res:any)=>{
      console.log(res)
    })
   }

   registerJobseeker(data:any){
    const jobseekerObj ={
      Experience: data.Experience,
      role: data.role,
      FullName: data.FullName,
      EmailId: data.EmailId,
      Password: data.Password,
      MobileNo: data.MobileNo,
      ResumeUrl: data.ResumeUrl,
    }
    this.job.registerJobseeker(jobseekerObj).subscribe((res:any)=>{
      console.log(res)
      alert('Registerd Successfully Click here to Login')
      this.router.navigate(['/login'])
    })
  }

}
