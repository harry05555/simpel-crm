import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private _userId!: string | null;
  private _user!: User;

  constructor(private rout: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('userId');
      this.getUser();
    })
  }

  getUser() {
    this.firestore.collection('user').doc(this.userId!).valueChanges().subscribe((user: any) => {
      this.user = new User(user);
    });
  }

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }

  public get userId(): string | null {
    return this._userId;
  }

  public set userId(value: string | null) {
    this._userId = value;
  }
}