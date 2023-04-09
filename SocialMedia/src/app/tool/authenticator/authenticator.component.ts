import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet'
@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent {
  state = AuthenticatorCompState.LOGIN;
  firebasetsAuth: FirebaseTSAuth;
  constructor(private bottomSheetRef: MatBottomSheetRef) {
    this.firebasetsAuth = new FirebaseTSAuth();
  }
  onRegisterClick(registerEmail: HTMLInputElement, registerPassword: HTMLInputElement, registerConfirm: HTMLInputElement) {
    let email = registerEmail.value;
    let pass = registerPassword.value;
    let conf = registerConfirm.value;
    if (this.isNotEmpty(email) && this.isNotEmpty(pass) && this.isNotEmpty(conf) && this.isMatch(pass, conf)) {
      console.log(email + pass)
      this.firebasetsAuth.createAccountWith({
        email: email,
        password: pass,
        onComplete: (uc) => {
          this.bottomSheetRef.dismiss();
          // alert("Account Created");
          // registerConfirm.value = "";
          // registerEmail.value = "";
          // registerPassword.value = "";
        },
        onFail: (err) => {
          alert("failed to create the account" + err);
        }
      });
    }
  }
  onLogin1(loginEmail: HTMLInputElement, loginPass: HTMLInputElement) {
    let email = loginEmail.value;
    let pass = loginPass.value;

    if (this.isNotEmpty(email) && this.isNotEmpty(pass)) {
      this.firebasetsAuth.signInWith({
        email: email,
        password: pass,
        onComplete: (uc) => {
          // alert("logged in");
          this.bottomSheetRef.dismiss();
        }, onFail: (err) => {
          alert(err);
        }
      })
    }
  }
  onResetClick(resetEmail: HTMLInputElement) {
    let email = resetEmail.value;
    if (this.isNotEmpty(email)) {
      this.firebasetsAuth.sendPasswordResetEmail({
        email: email,
        onComplete: (err) => {
          this.bottomSheetRef.dismiss();
        }

      })
    }
  }
  isNotEmpty(text: string) {
    return text != null && text.length > 0;
  }
  isMatch(text: string, compareWith: string) {
    return text == compareWith;
  }
  onForget() {
    this.state = AuthenticatorCompState.FORGET_PASSWORD
  }
  onCreate() {
    this.state = AuthenticatorCompState.REGISTER
  }
  onLogin() { this.state = AuthenticatorCompState.LOGIN }
  isLogin() {
    return this.state == AuthenticatorCompState.LOGIN
  }
  isRegister() {
    return this.state == AuthenticatorCompState.REGISTER
  }
  isForget() {
    return this.state == AuthenticatorCompState.FORGET_PASSWORD
  }
  getStateText() {
    switch (this.state) {
      case AuthenticatorCompState.LOGIN:
        return "Login";
      case AuthenticatorCompState.REGISTER:
        return "Register";
      case AuthenticatorCompState.FORGET_PASSWORD:
        return "Forget Password";
    }
  }
}

export enum AuthenticatorCompState {
  LOGIN, REGISTER, FORGET_PASSWORD
}


