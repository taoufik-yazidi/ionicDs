import { Component, OnInit } from '@angular/core';
import { user } from 'src/user';
import { UserServiceService } from '../user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  userDetail = new user()
  constructor(private userServiceService : UserServiceService , private router: Router) { }

  ngOnInit() {
  }
  add(){
    console.log(this.userDetail);
    this.userServiceService.addUser(this.userDetail)
    console.log(this.userServiceService.getAllUser());
    this.router.navigate(['/get-all-user']);
  }

}
