import { NgFor } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit{
 empId :any
  constructor(private job:JobService){
  // not getting data

  //   const userData = sessionStorage.getItem('loginJobseeker')

  //   if(userData !== null){
  //   const data = JSON.parse(userData)
  //   let k = this.empId = data
  //  console.log(k.CompanyName)

  //   }
  }

  ngOnInit(): void {

  }
  CreateJob(data:any){
     const jobOBJ = {
      JobName: data.JobName,
      Category: data.Category,
      Technologies: data.Technologies,
      CompanyName: data.CompanyName,
      Experience: data.Experience,
      Package: data.Package,
      Location: data.Location,
      JobDescription: data.JobDescription,
      CreatdDate: new Date()
      }
      this.job.createNewJob(jobOBJ).subscribe((res)=>{
        console.log(res)
        alert('Job Posted Successfully')
      })
  }
}
