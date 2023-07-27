import { Component } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
 client: Client [] = [];
 
 constructor(){
  this.client = [ {
    name: 'Olivia ',
    username: 'Olivia',
    email: 'oliviaM24@gmail.com',
    address: '7896 Toradora',
    contact: '612-551-8907'
  },
  {
    name: 'Jose ',
    username: 'Jose',
    email: 'Jose24@gmail.com',
    address: '789 New Horizon',
    contact: '612-551-8907'
  }

]
 }
}
