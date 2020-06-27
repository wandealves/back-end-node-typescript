import { uuid } from 'uuidv4';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

class FakeUsersTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  constructor() {}

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();
    userToken.id = uuid();
    userToken.token = uuid();
    userToken.user_id = user_id;

    this.userTokens.push(userToken);

    return userToken;
  }
}

export default FakeUsersTokensRepository;
