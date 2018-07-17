import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage
{
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {

  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SignupPage');
  // }

  signupData(username, dob, password, conpass, email, mobnum)
  {
    this.sqlite.create({name: 'ionicdb.db',location: 'default'})
      .then((db: SQLiteObject) =>
    {
      db.executeSql('create table userDetails(rowid INTEGER PRIMARY KEY, username TEXT, dob TEXT, password TEXT, conpass TEXT, Email TEXT, mobnum INT)')
        .then(res => console.log('Executed SQL'))

    })

  }
}

