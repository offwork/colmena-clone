declare var Object: any;
export interface AccessTokenInterface {
  "id"?: string;
  "ttl"?: number;
  "scopes"?: ["string"];
  "created"?: Date;
  "userId"?: string;
  "user"?: any;
}

export class AccessToken implements AccessTokenInterface{
  "id": string;
  "ttl": number;
  "scopes": ["string"];
  "created": Date;
  "userId": string;
  "user": any;

  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }

  public static factory(data: AccessTokenInterface): AccessToken {
    return new AccessToken(data);
  }
}
