import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { PrismaService } from "src/prisma/prisma.service";
import {ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
){
    constructor(
        config: ConfigService,
        private prisma: PrismaService,
      ) {
        super({
          jwtFromRequest:
            ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: config.get('JWT_SECRET'),
        });
      }
        async validate(data: {
            email: string;
            firstname: string;
            lastname: string;
          }) {
            const user = await this.prisma.user.findFirst({
              where: {OR: [{email: data.email},{firstName: data.lastname}]}
            })
            return user;
        }
}