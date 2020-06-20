import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import CreateUserService from '@modules/users/services/CreateUserService';
import FakeUserssRepository from '@modules/users/repositories/FakeUsersRepository';

describe('CreateUser', () => {
  it('should be able to crete a new user', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const createUserService = new CreateUserService(fakeUserssRepository);

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be able to create a new user with smae email from another', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const createUserService = new CreateUserService(fakeUserssRepository);

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
