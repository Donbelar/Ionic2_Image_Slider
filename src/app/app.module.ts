import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';

import {LoginPage} from '../pages/login/login';
import {WelcomePage} from '../pages/welcome/welcome';
import {SubdomainPage} from '../pages/subdomain/subdomain';

import {Ionic2RatingModule} from 'ionic2-rating';
import {SignupPage} from "../pages/signup/signup";
import {ApiConnect} from "../providers/api-connect";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    WelcomePage,
    SubdomainPage
 ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    WelcomePage,
    SubdomainPage
  ],
  providers: [ ApiConnect, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
