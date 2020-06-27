import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';
import IMailPrivider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
// import User from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailPrivider')
    private mailPrivider: IMailPrivider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    await this.mailPrivider.sendMail(
      email,
      'pedido de recuperação de senha recebido.',
    );
  }
}

export default SendForgotPasswordEmailService;
