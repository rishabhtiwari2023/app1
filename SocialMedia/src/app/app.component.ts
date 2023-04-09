import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tool/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialMedia';
  auth = new FirebaseTSAuth
  // isLoggedIn = false;
  constructor(private loginSheet: MatBottomSheet, private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState({
          whenSignedIn: user => {
            this.router.navigate(["emailVerification"])
            // alert("logged app in");
            // this.isLoggedIn = true;
          },
          whenSignedOut: user => {
            // alert("logged out")
          },
          whenSignedInAndEmailNotVerified: user => {
            this.router.navigate(["emailVerification"])
          },
          whenSignedInAndEmailVerified: user => {
            this.router.navigate(['product'])
          },
          whenChanged: user => {

          }
        })
      }
    )
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }
  OnLogOutClick() {
    this.auth.signOut(),this.router.navigate([""])
  }
  OnLogInClick() { this.loginSheet.open(AuthenticatorComponent) }
}
