import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-all-user',
  templateUrl: './get-all-user.page.html',
  styleUrls: ['./get-all-user.page.scss'],
})
export class GetAllUserPage implements OnInit {

  users :any []= []; 
  constructor(private userServiceService : UserServiceService) { }

  ngOnInit() {
   this.users= this.userServiceService.getAllUser()
  }

}
