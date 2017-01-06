import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Stormpath} from "../../providers/stormpath";
import {RegisterModel} from '../../config/config';
import {Response} from "@angular/http";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [Stormpath]
})

export class SignupPage {

  registerModel: RegisterModel;

  constructor(public navCtrl: NavController, public stormpath: Stormpath, public alertCtrl: AlertController) {

    this.registerModel = {
      givenName: '',
      surname: '',
      username: '',
      password: '',
      email: ''
    };

  }

  userRegister(){
    this.stormpath.registerUser(this.registerModel).subscribe(data=> {
        console.log(data),
          this.navCtrl.pop();
    },
      (err: Response)=>{
      err.json();
       //console.log(err.Response.message);
      this.showAlertErr();
      this.registerModel.password = '';
    });
  }


  showAlertErr() {
    let alert = this.alertCtrl.create({
      title: 'Oh no !',
      subTitle: 'Password requires at least 1 numeric, uppercast, character.',
      buttons: ['OK']
    });
    alert.present();
  }
}
