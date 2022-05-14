import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user!: User;
  loading: boolean = false;
  private _userId!: string | null;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore, private dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore.collection('user').doc(this.userId!).update(this.user.toJson()).then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

  public get userId(): string | null {
    return this._userId;
  }

  public set userId(value: string | null) {
    this._userId = value;
  }
}