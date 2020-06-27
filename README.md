# Recuperação de senha

**RF**

- O usuário deve poder recupearr sua senha informando o seu e-mail;
- O usuário deve receber uma e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Miltrap para testar envios de e-mails em desenvolvimento;
- Utilizar o Amazon SES para envio em produção;
- O envio de e-mails deve acontecer em segundo plano(background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmnar a nova senha ao resetar;

# painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do pretador devem ser amarzenado em cache;
- As notificões do prestador devem ser armazenada no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**

-A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os pretadores de serviço cadastrado;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horário disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h ás 18h(Primeiro ás 8h, último ás 17h);
- O usuário não pode agendar em um hoário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo memso;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email, senha;

**RN**

- O usuário não pode altearr seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;
