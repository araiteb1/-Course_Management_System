import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AuthDto, LoginDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtSessionGuard } from './guard';
import { userData } from './Interfaces/interface';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Get('google-callback')
    @UseGuards(AuthGuard('google'))
    async AuthGoogle(@Req() req: Request & { user: userData }, @Res() res: Response) {
        // console.log(req)
        return this.authService.googleLogin(req.user, res);
    }

    @Post('register')
    // @UseGuards(JwtSessionGuard)
    register(@Req() req:Request, @Res() res:Response, @Body() dto: AuthDto) {
        // console.log(dto)
        return this.authService.register(req, res, dto);        
    }

    @Post('login')
    login(@Res() res: Response, @Body() dto: LoginDto) {
        // console.log(dto)
        return this.authService.login(res, dto);
    }

    @Post('logout')
    
    logout(@Req() req: Request, @Res() res: Response) {
        return this.authService.logout(req, res);
    }
}

