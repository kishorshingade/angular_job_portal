import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit{
  isLoggedIn:any
  jobDetail:any
  jobsList :any
  constructor(private job:JobService,private router:Router){
    const userData = sessionStorage.getItem('loginJobseeker')

    if(userData == null){
     this.isLoggedIn = false;
    }else{
      this.isLoggedIn = true
      this.jobDetail = JSON.parse(userData)
    }
  }
  ngOnInit(): void {
    this.loadAllJobs()
  }
  loadAllJobs(){
    this.job.getAllJobs().subscribe((res)=>{
      console.log(res)
      this.jobsList = res
    })
  }
}
