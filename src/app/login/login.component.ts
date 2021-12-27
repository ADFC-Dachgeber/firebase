import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Message } from '../message';
import { PATH_MAP } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
      ]),
    password: new FormControl(
      '',
      [
        Validators.required,
      ]),
  });

  constructor(
    private readonly router: Router,
    private readonly snackbar: MatSnackBar,
  ) { }

  async onSubmit(loginForm: FormGroup) {
    const auth = getAuth();
    const { email, password } = loginForm.value;
    try {
      const { user } = (await signInWithEmailAndPassword(auth, email, password));
      this.router.navigate([PATH_MAP]);
    } catch (error) {
      this.snackbar.open(Message.WrongCredentials);
    }
  }

  async onLoginWithGoogle() {
    const auth = getAuth();
    try {
      const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
      this.router.navigate([PATH_MAP]);
    } catch (error) {
      this.snackbar.open(Message.LoginFailed);
    }
  }

  ngOnInit(): void {
  }
}
