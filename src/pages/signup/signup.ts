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
  dob:any;
  passw:any;
  conpass:any;
  email:any;
  mobnumber:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {

  }

  signupData(username, dob, password, conpass, email, mobnum) {
    this.name = username;
    this.dob = dob;
    this.passw = password;
    this.conpass = conpass;
    this.email = email;
    this.mobnumber = mobnum;
    alert("mess" + this.name + this.dob + this.passw + this.conpass + this.email + this.mobnumber);
      this.sqlite.create({
           name: 'ionicdb.db'
          ,location: 'default'
        })
        .then((db: SQLiteObject) =>
      {

        //create table section
        db.executeSql('CREATE TABLE IF NOT EXISTS userINFO(id INTEGER PRIMARY KEY AUTOINCREMENT,username,phonenum,email,dob,password,conpass)',[])
          .then(() => alert('Executed SQL'))
          .catch(e => console.log(e));

       //insert into table
        db.executeSql('INSERT INTO userINFO(username,phonenum,email,dob,password,compass) VALUES(?,?,?,?,?,?)',
          [this.name,this.mobnumber,this.email,this.dob,this.passw,this.conpass])

        db.executeSql('select * from userINFO', []).then((ionicdb) => {

          alert("retrieve data..."+JSON.stringify(ionicdb));
        })

      })
        .catch(e => alert("error..."+JSON.stringify(e)));



  }

}

