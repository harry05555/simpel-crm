import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  constructor() { }

  ngOnInit(): void {

  }

  saveUser(){
    console.log(this.user);
    console.log(this.user.birthDate.getTime());
  }
}