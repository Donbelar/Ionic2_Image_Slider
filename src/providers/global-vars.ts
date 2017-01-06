import { Injectable } from '@angular/core';

/*
 Generated class for the GlobalVars provider.

 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class GlobalVars {


  private _userStatus: number;

  constructor() {
    this._userStatus = 0;
  }

  set userStatus(value: number) {
    this._userStatus = value;
  }
  get userStatus(): number {
    return this._userStatus;
  }

}
