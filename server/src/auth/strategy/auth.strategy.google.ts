import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_APP_UID,
      clientSecret: process.env.GOOGLE_APP_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
    ): Promise<any> {
      const { name, emails, photos } = profile;
      const user = {
        firstname: name.givenName,
        lastname: name.familyName,
        email: emails[0].value,
        accessToken,
      };
      done(null, user);
  }
}