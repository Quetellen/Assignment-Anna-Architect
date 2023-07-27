import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent {


  
  onSubmit(data: any){
    console.log(data)
  };
}
