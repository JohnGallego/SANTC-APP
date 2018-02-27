import { Component, OnInit } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private myClientId = '63551241668-eu70fuam8i7b015dvpk59otqdo6p8spq.apps.googleusercontent.com';

  constructor() { }

  ngOnInit() {
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    const googleUser: gapi.auth2.GoogleUser = event.googleUser;
    const id: string = googleUser.getId();
    const profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log(id_token);
  }

}
