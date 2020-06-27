import 'reflect-metadata';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';
import FakeUserssRepository from '@modules/users/repositories/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUserssRepository = new FakeUserssRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUserssRepository,
      fakeMailProvider,
    );

    await fakeUserssRepository.create({
      name: 'John Doe',
      email: 'johndoe@exemple.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'johndoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
