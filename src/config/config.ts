/**
 * Created by Administrator on 12/9/2016.
 */
export interface AuthUserModel{
  username: string;
  password: string;
}

export interface RegisterModel{
  givenName: string;
  surname: string;
  username: string;
  password: string;
  email: string;
}

export interface ConditionModel{
  index: number;
}

