/**
 * Created by Administrator on 11/29/2016.
 */
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Stormpath} from "../../providers/stormpath";
import {ApiConnect} from '../../providers/api-connect';
import {AuthUserModel} from '../../config/config';
import {WelcomePage} from '../welcome/welcome';
import {SignupPage} from '../signup/signup';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Stormpath, ApiConnect]
})

export class LoginPage {

  authUserModel: AuthUserModel;

  signupPage = SignupPage;

  constructor(public navCtrl: NavController, public stormpath: Stormpath, public apiConnect: ApiConnect, public alertCtrl: AlertController) {

    this.authUserModel = {
      username: '',
      password: ''
    };
  }

  userLogin(){
   // this.gotoWelcomePage();

    //-- login part ---
    this.apiConnect.authUser(this.authUserModel)
      .subscribe(data=>{
        let response = data.json();

        console.log(response.response.body);
        this.gotoWelcomePage();
      }, err=>{
        console.log(err);
        this.showAlertMsg('Oh, no!', 'Typed incorrect username or password.');
        this.authUserModel.password = '';
    })

  }

  gotoWelcomePage(){

      this.navCtrl.push(WelcomePage);

  }

  showAlertMsg(alertTitle: string, alertMsg: string) {
    let alert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertMsg,
      buttons: ['OK']
    });
    alert.present();
  }
}
