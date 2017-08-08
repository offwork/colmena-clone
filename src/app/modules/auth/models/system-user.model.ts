declare var Object: any;
export interface SystemUserInterface {
  "id": string;
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "fullName"?: string;
  "avatar"?: string;
  "realm"?: string;
  "password": string;
  "emailVerified"?: boolean;
  "verificationToken"?: string;
  "created"?: Date;
  "modified"?: Date;
  accessTokens?: any[];
  roles?: any[];
}

export class SystemUser implements SystemUserInterface {
  "id": string;
  "username": string;
  "email": string;
  "firstName": string;
  "lastName": string;
  "fullName": string;
  "avatar": string;
  "realm": string;
  "password": string;
  "emailVerified": boolean;
  "verificationToken": string;
  "created": Date;
  "modified": Date;
  accessTokens: any[];
  roles: any[];

  constructor(data?: SystemUserInterface) {
    Object.assign(this, data);
  }

  public static factory(data: SystemUserInterface): SystemUser {
    return new SystemUser(data);
  }
}
