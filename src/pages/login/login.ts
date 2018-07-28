import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  pass:any

  constructor(public navCtrl: NavController, public navParams: NavParams ,private sqlite: SQLite) {
  }

  signupPage()
  {
    this.navCtrl.push(SignupPage);
  }
  signinpage(user,pass)
  {
    this.user=user;
    this.pass=pass;
    alert("The login username:..."+user);
    alert("The login password:..."+pass);

  }

}
