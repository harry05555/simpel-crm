import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 private _allUsers = [];
 

  constructor(private titleService: Title, public dialog: MatDialog, private title : TitleService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title.title + " - User");
    this.firestore.collection('user').valueChanges({idField: 'userId'}).subscribe((changes: any) => {
      this.allUsers = changes;
      console.log(changes);
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  public get allUsers() {
    return this._allUsers;
  }
  public set allUsers(value) {
    this._allUsers = value;
  }
}