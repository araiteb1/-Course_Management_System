import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, LoginDto } from './dto';
import { Request, Response } from 'express';
import { userData } from './Interfaces/interface';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ){}

    async googleLogin(user: userData, res: Response) {
      try {
          const userinfo = await this.prisma.user.findUnique({
            where: {
              email: user.email,
            },
            select: {
              firstName: true,
              email: true,
              lastName: true,
            },
          });
          if (!userinfo) {
            const hash = await argon2.hash("password");
              const userinfo = await this.prisma.user.create({
                data: {
                  firstName: user.firstname,
                  lastName: user.lastname,
                  email: user.email,
                  password: hash,
                },
              });
              const secret = process.env.JWT_SESSION;
              const jwtSession = await this.jwt.signAsync(user, {
                  expiresIn: '1d',
                  secret: secret,
              });
              res.status(200).cookie('jwt_session', jwtSession, {
                  httpOnly: true,
                  maxAge: 1000 * 60 * 60 * 24 
              });
              res.redirect('http://localhost:3000/Profile');
    } else {
      const jwtToken = await this.signToken(userinfo.email, userinfo.firstName);
          res.cookie('jwt_token', jwtToken.access_token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24
      });
      res.redirect('http://localhost:3000/Profile');
          }
      }catch (e) {
          // console.log(e);
          if (e instanceof PrismaClientKnownRequestError) {
            console.log(`code : ${e.code} ,message : ${e.message}`);
          }
        }
  }

    async register(req: Request, res: Response, dto: AuthDto) {
        const secret: string = process.env.JWT_SECRET;
    try {
      const hash = await argon2.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          firstName: dto.firstname,
          lastName: dto.lastname,
          email: dto.email,
          password: hash,
        },
      });

      const jwtToken = await this.signToken(user.email, user.firstName);
      res.cookie('jwt_token', jwtToken.access_token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 
      });
      res.clearCookie('jwt_session');
      res.status(201).send({ success: true });
    } catch (e) {
      var error;
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          error = 'user already exist';
        } else {
          error = 'An Error has occurred';
        }
      }
      // console.log(e);
      return res.status(401).send(JSON.stringify({ error: error }));
    }
    }

    async login(res: Response, dto: LoginDto) {
        try {
            const user = await this.prisma.user.findUnique({
              where: {
                email: dto.email,
              },
              select: {
                password: true,
                email: true,
                firstName: true,
              },
            });
            if (!user) throw new ForbiddenException('Nickname Not found');
            if (await argon2.verify(user.password, dto.password)) {
                const token = await this.signToken(user.email, user.firstName);
                res.cookie('jwt_token', token.access_token, {
                  httpOnly: true,
                  maxAge: 1000 * 60 * 60 * 24 
                });
                res.status(200).send({ Is2FAenabled: false });
            } else {
              throw new ForbiddenException('Password Incorrect');
            }
          } catch (err) {
            res.status(401).json({ error: err });
          }
    }

    async logout(req: Request, res: Response) {
        const token = req.cookies['jwt_token'];
        try {
          res
            .status(201)
            .clearCookie('jwt_token')
            .json({ success: 'logged out succesfully' });
        } catch (err) {
          // (err);
          return res.status(401).json({ error: err });
        }
    }


    async signToken(
        useremail: string,
        firstName: string,
      ): Promise<{ access_token: string }> {
        const payload = {
          email: useremail,
          firstName,
        };
        const secret = this.config.get('JWT_SECRET');
    
        const token = await this.jwt.signAsync(payload, {
          expiresIn: '1d',
          secret: secret,
        });
        return {
          access_token: token,
        };
      }

}
