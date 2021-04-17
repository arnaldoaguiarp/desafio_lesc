Desafio

Crie no seu Github um projeto chamado “desafio_lesc”. Todo o desafio deve ser resolvido usando
Nestjs.

Requisitos:
1. Cadastro de usuários com os campos: nome, email, password (CRUD completo);
2. Cadastro das atividades de um usuário, contendo os campos: título, descrição e data de criação
(CRUD completo);
3. Disponibilizar os crud de usuários e atividades através de serviços nos métodos: POST, PUT,
DELETE e GET;
4. Criar um serviço no método POST chamado login, recebendo o email e password, e retornando
apenas o token (json web token).
5. Disponibilizar um serviço no método GET que retorne as atividades cadastradas de um usuário
por intervalo de data de criação;
6. Password deve ser gravado criptografado;
7. Todos os serviços relacionados a atividades devem receber além de seus parâmetro, um token
válido para garantir que o usuário está logado;
8. Um usuário não pode acessar os serviços de atividades de outro usuário;
9. Como ORM utilizar o Typeorm, mapeando para os bancos Mysql ou postgres.