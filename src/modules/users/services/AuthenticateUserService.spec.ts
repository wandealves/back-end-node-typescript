import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AthenticateUserService from '@modules/users/services/AuthenticateUserService';
import FakeUserssRepository from '@modules/users/repositories/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUserssRepository,
      fakeHashProvider,
    );
    const athenticateUserService = new AthenticateUserService(
      fakeUserssRepository,
      fakeHashProvider,
    );

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const response = await athenticateUserService.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it('should be able to authenticate with non existing user', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const fakeHashProvider = new FakeHashProvider();
    const athenticateUserService = new AthenticateUserService(
      fakeUserssRepository,
      fakeHashProvider,
    );

    expect(
      athenticateUserService.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(
      fakeUserssRepository,
      fakeHashProvider,
    );
    const athenticateUserService = new AthenticateUserService(
      fakeUserssRepository,
      fakeHashProvider,
    );

    await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(
      athenticateUserService.execute({
        email: 'johndoe@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
