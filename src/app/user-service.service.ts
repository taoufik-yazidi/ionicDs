import { Injectable } from '@angular/core';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  users : any[]=[]; 
  
  constructor() { }

  getAllUser(){
    return this.users
  }
  addUser (user :  any){
    this.users.push(user)
  }
}
