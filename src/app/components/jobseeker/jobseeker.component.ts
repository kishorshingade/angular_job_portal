import { Component,OnInit} from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {

  constructor(private job:JobService){}
  ngOnInit(): void {

  }


}
