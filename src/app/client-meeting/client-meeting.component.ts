import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientmeeting } from '../clientmeeting.model';


@Component({
  selector: 'app-client-meeting',
  templateUrl: './client-meeting.component.html',
  styleUrls: ['./client-meeting.component.css']
})
export class ClientMeetingComponent {

  clientmeeting: Clientmeeting [] = [];
 
  constructor(){
   this.clientmeeting = [ {
     topic: 'The client want to use recycled materials on the bedroom project ',
     npeople: '6',
     date: '7/28/2023',
     time: '13:30',
     projectid: '8909705'
   },
 
 ]
  }
  
  onSubmit(data: any){
    console.log(data)
  };
}
