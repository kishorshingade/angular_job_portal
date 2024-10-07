import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  URL = "http://localhost:3000/jobListing"
  constructor(private http:HttpClient) { }

  getJobById(id:number){
    return this.http.get("http://localhost:3000/jobListing/?id="+id)
 }

  registerEmployer(obj:any){
   return this.http.post('http://localhost:3000/Employer',obj)
  }
  registerJobseeker(obj:any){
    return this.http.post('http://localhost:3000/jobseeker',obj)
   }

   login(){
    return this.http.get('http://localhost:3000/jobseeker')
   }
   loginEmp(){
    return this.http.get('http://localhost:3000/Employer')
   }
   createNewJob(obj:any){
    return this.http.post('http://localhost:3000/jobListing',obj)
   }
   getAllJobs(){
    return this.http.get('http://localhost:3000/jobListing')
   }
   applyForJob(obj:any){
    return this.http.post("http://localhost:3000/applyData",obj)
   }
   getCandidateData(){
    return this.http.get("http://localhost:3000/applyData")
   }
  }
