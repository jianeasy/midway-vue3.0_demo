import { Inject, Controller, Body, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import UserModel from '../model/user.model';
import { JwtService } from '@midwayjs/jwt';
import userDto from '../dto/user.dto';

@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  jwt: JwtService;

  @Post('/login')
  async login(@Body() user: userDto) {
    const { username, password } = user;
    const userInfo = await new UserModel().getUserByUsernameAndPassword(
      username
    );
    if (
      userInfo &&
      username === userInfo.username &&
      password === userInfo.password
    ) {
      const token = await this.jwt.sign(
        { msg: 'success' },
        '1655454903837_5743',
        {
          expiresIn: '2d',
        }
      );
      console.log('token=>', token);
      return {
        code: 200,
        result: 'success',
        message: '登录成功',
        data: {
          token,
        },
      };
    } else {
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    }
  }
}
