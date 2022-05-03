import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private titleService: Title, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.titleService.setTitle('SimpelCrm - User');
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}