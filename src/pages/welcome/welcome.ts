/**
 * Created by Administrator on 11/29/2016.
 */

import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {NgClass} from '@angular/common';
import {SubdomainPage} from '../subdomain/subdomain';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [NgClass]
})
export class WelcomePage {


  index: number = 1;

  constructor(public navCtrl: NavController){

  }

  plusIndex(){
    //debugger;
    ++this.index;

    if (this.index === 4){
      this.index = 0;
      // goto next page. push
      this.navCtrl.push(SubdomainPage);
    }
  }
}
