import { User } from "@prisma/client";

export interface userData {
    email: string;
    firstname: string;
    lastname: string;
}

export interface decodedTokenInterface {
    id: number;
    email: string;
}

export interface UserToken {
    id: number;
    email: string;
}

export interface jwtData {
    decoded: decodedTokenInterface;
    authorized: boolean;
}

export interface userjwt extends User {
    jwt?: {
      exp: number;
      iat: number;
    };
  }