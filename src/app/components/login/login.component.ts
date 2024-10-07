import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:any
  Password:any
  empData:any
  isJobseeker: boolean = true
  constructor(private job:JobService,private router:Router,){}

  ngOnInit(): void {

  }
   Login(){
  this.job.login().subscribe((res)=>{
    console.log(res)
    this.empData = res
    const data = this.empData.filter((item:any)=>{
      return item.EmailId == this.Email && item.Password == this.Password
    })
    if(data.length > 0){
     sessionStorage.setItem('loginJobseeker',JSON.stringify(data))
     alert('Jobseeker Login Sucess')
     this.router.navigate(['/home'])
    }else{
      alert('Invalid Data')
      this.Email = ""
      this.Password = ""
    }
  })
   }
   loginEmp(){
    this.job.loginEmp().subscribe((res)=>{
      console.log(res)
      this.empData = res
      const data = this.empData.filter((item:any)=>{
        return item.EmailId == this.Email && item.Password == this.Password
      })
      if(data.length > 0){
      sessionStorage.setItem('loginJobseeker',JSON.stringify(data))
     alert('Employer Login Sucess')
     this.router.navigate(['/home'])
      }else{
        alert('Invalid Data')
        this.Email = ""
        this.Password = ""
      }
    })
   }
}
