import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import {AuthUserModel} from '../config/config';

/*
  Generated class for the ApiConnect provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiConnect {

  public token: string;

  constructor(public http: Http) {
    console.log('Hello ApiConnect Provider');
  }

  authUser(userModel: AuthUserModel){

    var postData = JSON.stringify({
      'username': userModel.username,
      'password': userModel.password
    });


    var url = 'https://81po75m1z6.execute-api.ap-southeast-1.amazonaws.com/v1/auth/signin';

    return this.http.post(url, postData, {headers: this.getHeaders()});


  }

  getHeaders(): Headers {
    var headers = new Headers();
    if (this.token){
      headers.append('Token', this.token);
    }
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
