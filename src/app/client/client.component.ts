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
    name: 'Olivia Madeira ',
    username: 'Olivia',
    email: 'oliviaM24@gmail.com',
    address: '2486 Talarios',
    contact: '612-557-8907',
    projectid: '8909705'
  },
  {
    name: 'Jose Antonio',
    username: 'Jose',
    email: 'joseA24@gmail.com',
    address: '267 New Horizon',
    contact: '612-997-8000',
    projectid: '8567705'
  },
  {
    name: 'Sofie Mozete',
    username: 'Sofie',
    email: 'smozete4@gmail.com',
    address: '256 Los Angeles',
    contact: '805-567-8807',
    projectid: '8567805'
  }

]
 }
}


