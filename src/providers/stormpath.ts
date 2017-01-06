import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AuthUserModel, RegisterModel} from '../config/config';


/*
  Generated class for the Stormpath provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Stormpath {

  private endpoint_prefix = 'https://api.stormpath.com';
  //private register_app_uri = '/v1/applications/1QrmcDJrrdLuwW7qnGosTX/accounts';
  //private authenti_app_uri = '/v1/applications/1QrmcDJrrdLuwW7qnGosTX/loginAttempts';
  private application_uri = '/v1/applications/';
  private register_app_uri = '/accounts';
  private authenticate_uri = '/loginAttempts';





  //----   Please replace the following variables with your Stormpath information.

  private application_ID = '1QrmcDJrrdLuwW7qnGosTX';
  private apiKey_ID = '8TL2Z1Y5PMF3HABRRSG041L4X';
  private apiKey_secret = 'w50FrLH2E6ggm0PcWjEaTQHx8ThghAZ+5lji1Q+94r4';

  //-----------------------------------------------------------------------------



  constructor(public http: Http) {
    console.log('Hello Stormpath Provider');
  }

  registerUser(userModel: RegisterModel){

    var postData = JSON.stringify({
      'givenName': userModel.givenName,
      'sirname': userModel.surname,
      'username': userModel.username,
      'email': userModel.email,
      'password': userModel.password
    });

    //var url = this.endpoint_prefix + this.register_app_uri;
    var url = this.endpoint_prefix + this.application_uri + this.application_ID + this.register_app_uri;

    console.log('User info is ' + postData);
    console.log('Application uri is '+ url);

    var header = new Headers();
    var headers: Headers = this.createHeaders(header);

    return this.http.post(url, postData, {headers: headers})
      .map((res: Response)=>res.json());
    //.catch((err: any)=>Observable.throw(err.json().error || 'Server Error'));
  }

  authUser(userModel: AuthUserModel){

    var encryptData = btoa(userModel.username + ':' + userModel.password);

    var postData = JSON.stringify({
      'type': 'basic',
      'value': encryptData
    });


    var header = new Headers();
    var headers: Headers = this.createHeaders(header);
    //var url = this.endpoint_prefix + this.authenti_app_uri;
    var url = this.endpoint_prefix + this.application_uri + this.application_ID + this.authenticate_uri;

    return this.http.post(url, postData, {headers: headers})
      .map((res: Response)=> res.json().account.href);
      //.catch((err: any)=>Observable.throw(err.json().error || 'Server Error'));
  }

  getRequestData(url: string){

    let header = new Headers();
    let headers: Headers = this.createHeaders(header);
    return this.http.get(url, {headers: headers}).map((res: Response) => res.json());
      //.catch((err: any)=>Observable.throw(err.json().error || 'Server Error'));
  }

  createHeaders(headers: Headers): Headers{
    var apiKey = this.apiKey_ID + ':' + this.apiKey_secret;
    console.log(apiKey);
    headers.append('Authorization', 'Basic ' + btoa(apiKey));
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
