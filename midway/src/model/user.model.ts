import UserEntity from '../entity/user.entity';
// import { dbConnection } from '../controller';
// import { Repository, EntityManager } from 'typeorm';
import { dataSource } from '../controller/home.controller';

class UserModel {
  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */
  async getUserByUsernameAndPassword(username: string): Promise<UserEntity> {
    return await dataSource.getRepository(UserEntity).findOneBy({
      username,
    });
  }
}

export default UserModel;
