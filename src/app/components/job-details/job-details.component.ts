import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
 jobid:any
 jobDetail:any
 isLoggedIn:any
jobDetailsData : any

 jobApplicationObj ={
  jobinfo : 0,
  JobseekerId: 0,
  Applicationstatus:"new",
  AppyDate: new Date()
 }
  constructor(private activateRoute:ActivatedRoute,private job:JobService){
    console.log(this.jobApplicationObj)
    const userData = sessionStorage.getItem('loginJobseeker')

    if(userData == null){
     this.isLoggedIn = false;
    }else{
      this.isLoggedIn = true
      this.jobDetail = JSON.parse(userData)
      this.jobApplicationObj.JobseekerId = this.jobDetail
    }
  }
  ngOnInit(): void {
   this.activateRoute.paramMap.subscribe((para)=>{
    let k = this.jobid = para.get('id')
    this.job.getJobById(this.jobid).subscribe((res)=>{
      this.jobDetailsData = res
      this.jobApplicationObj.jobinfo = this.jobDetailsData
    })
   })

  }
 apply(){
 this.job.applyForJob(this.jobApplicationObj).subscribe((res)=>{
  console.log(res)
  alert('You Have Successfully Apply for job')
 })
 }

}
