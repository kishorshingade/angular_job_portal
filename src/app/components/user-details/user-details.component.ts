import { Component,OnInit} from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
 candidateData:any
 applyDataList: any[] = [];
  constructor(private job:JobService){}
  ngOnInit(): void {
      this.job.getCandidateData().subscribe((res:any)=>{
        console.log(res)
       this.applyDataList = res
      })
  }
}
