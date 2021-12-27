import { Component, OnInit } from '@angular/core';
import { Auth, getAuth, User } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { PATH_LOGIN } from './constants';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ADFC Dachgeber';
  $user: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  constructor(
    private readonly router: Router,
    private readonly snackbar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    const auth: Auth = getAuth();
    auth.onAuthStateChanged(user => this.$user.next(user));
  }

  logout() {
    const auth = getAuth();
    auth.signOut();
    this.router.navigate([PATH_LOGIN]);
    this.snackbar.open(Message.LogoutSuccess);
  }
}
