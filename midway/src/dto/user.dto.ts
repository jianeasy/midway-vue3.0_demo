import { Rule, RuleType } from '@midwayjs/validate';

class UserDto {
  @Rule(RuleType.required())
  username: string;

  @Rule(RuleType.required())
  password: string;
}

export default UserDto;
