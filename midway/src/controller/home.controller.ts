import { Controller, Get } from '@midwayjs/decorator';
import { DataSource } from 'typeorm';
import UserEntity from '../entity/user.entity';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  entities: [UserEntity],
  synchronize: true,
  logging: false,
});
dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    dataSource.getRepository(UserEntity).save({
      username: 'jack',
      password: 'redballoon',
    });
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
