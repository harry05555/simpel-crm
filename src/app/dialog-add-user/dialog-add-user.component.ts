import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
/* import { Firestore , collection, setDoc, doc } from '@angular/fire/firestore'; */
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  loading: boolean = false;
  user: User = new User();

  constructor( private firestore: AngularFirestore, private dialogRef: MatDialogRef<DialogAddUserComponent> ) { }

  ngOnInit(): void {

  }

  saveUser(){
    this.loading = true;
    this.firestore.collection('user').add(this.user.toJson());
    this.loading= false;
    this.dialogRef.close();
  }
}