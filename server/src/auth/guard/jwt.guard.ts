import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtData, decodedTokenInterface, userjwt } from '../Interfaces/interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class JwtSessionGuard extends AuthGuard('jwt_session') {
  constructor(private jwt: JwtService) {
    super();
  }

  verifySession(req: Request): jwtData {
    const token: string = req.cookies['jwt_session'];
    if (!token) return { decoded: null, authorized: false };
    const secret: string = process.env.JWT_SESSION;
    try {
      const decoded: decodedTokenInterface = this.jwt.verify(token, { secret });
      return { decoded: decoded, authorized: true };
    } catch (err) {
      return { decoded: null, authorized: true };
    }
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    const data: jwtData = this.verifySession(req);
    if (data.authorized) {
      req.body.staff = { jwtDecoded: data.decoded };
      return true;
    } else return false;
  }
}

@Injectable()
export class JwtGuard extends AuthGuard('jwt_token') {
  constructor(private jwt: JwtService, private prisma: PrismaService) {
    super();
  }

  async verifyToken(token: string): Promise<User> {
    
    if (!token) return null;
    const secret: string = process.env.JWT_SECRET;
    try {
   
      const decoded: decodedTokenInterface = this.jwt.verify(token, { secret });
      const newUser: userjwt = await this.prisma.user.findUnique({
        where: {
          id: decoded['id'],
        },
      });
      if (!newUser) throw new Error('Error: invalid token');
      newUser.jwt = { exp: decoded['exp'], iat: decoded['iat'] };
      return newUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    const token: string = req.cookies['jwt_token'];
    console.log("---> ",token);
    if (!token) return false;
    req.body.staff = await this.verifyToken(token);
    if (req.body.staff) {
      return true;
    } else {
      return false;
    }
  }
}