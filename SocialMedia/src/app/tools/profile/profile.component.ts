import { Component, Input } from '@angular/core';
// import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
// import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() show: boolean | undefined;
  // firestore: FirebaseTSFirestore;
  // auth: FirebaseTSAuth;
  constructor() {
    // this.auth = new FirebaseTSAuth
    // this.firestore = new FirebaseTSFirestore
  }
  onContinueClick(nameInput: HTMLInputElement, descriptionInput: HTMLTextAreaElement) {
    let name = nameInput.value;
    let desc = descriptionInput.value;
    // this.firestore.create(
    //   {
    //     path: ["Users", this.auth.getAuth().currentUser.uid],
    //     data: {
    //       publicName: name,
    //       description: desc
    //     },
    //     onComplete: (doc) => {
    //       alert(" hello profile created")
    //       nameInput.value = "";
    //       descriptionInput.value = ""
    //     },
    //     onFail: (err) => {

    //     }
    //   }
    // )
  }

}