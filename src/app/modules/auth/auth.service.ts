import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { SystemUser } from "./models/system-user.model";
import { AccessToken } from "./models/access-token.model";

@Injectable()
export class AuthService {

  private user: SystemUser = new SystemUser();
  private token: AccessToken = new AccessToken();

  constructor() {
    /* set user */
    this.user.id = 'admin';
    this.user.username = 'kerem.ozdemir@kalemyazilim.com';
    this.user.email = 'kerem.ozdemir@kalemyazilim.com';
    this.user.password = 'kalem123!';
    this.user.firstName = 'Kerem';
    this.user.lastName = 'Özdemir';
    this.user.fullName = 'Kerem Özdemir';
    this.user.avatar = 'https://avatars0.githubusercontent.com/u/10039583?v=4&s=200';

    /* set token */
    this.token.id = 'ba8583be-f8a3-4e5b-b27c-851e36125c0f';
    this.token.ttl = 1209600;
    this.token.created = new Date();
    this.token.userId = this.user.id;
    this.token.user = this.user;
  }

  login(credentials) {
    return this.isUserLogin(credentials);
  }

  logout() {
    if (this.isAuthenticated()) {
      console.log('Logging out...');
      window.localStorage.removeItem('token');
      return this.isUserLogout();
    } else {
      console.log('Already logged out...');
      return Observable.of({});
    }
  }

  isAuthenticated() {
    if (!this.user.id && window.localStorage.getItem('token')) {
      this.token = JSON.parse(window.localStorage.getItem('token'));
      this.user = this.token.user
    }
    return this.user.id ? this.user : false;
  }

  setToken(token) {
    window.localStorage.setItem('token', JSON.stringify(token));
    return new Promise(resolve => {
      this.token = token;
      this.user = token.user;
      resolve(this.user);
    });
  }

  isUserLogin(credentials) {
    return credentials.email === this.user.email && credentials.password === this.user.password;
  }

  isUserLogout() {
    return this.token;
  }


}

/**
 * {
 *   "id":"ba8583be-f8a3-4e5b-b27c-851e36125c0f",
 *   "ttl":1209600,
 *   "created":"2017-08-07T19:28:25.238Z",
 *   "userId":"admin",
 *   "user":{
 *     "id":"admin",
 *     "username":"admin@example.com",
 *     "email":"admin@example.com",
 *     "firstName":"Admin",
 *     "lastName":"Colmena",
 *     "fullName":"Admin Colmena",
 *     "avatar":"https://avatars3.githubusercontent.com/u/8403845?v=3&s=200",
 *     "created":"2017-08-04T06:42:03.484Z",
 *     "modified":"2017-08-04T06:42:03.484Z"
 *   },
 *   "rememberMe":true
 * }
 * */
