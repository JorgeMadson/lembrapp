# LembrApp

LembrApp é um sistema simples para lembrar de datas importantes, como aniversários, aniversários de namoro, entre outras.
O projeto foi desenvolvido com **Next.js** no front-end/back-end e **PostgreSQL** para o banco de dados.

## Funcionalidades

Em execução:

- Criação de lembretes para essas datas
Falta fazer:
- Cadastro de usuários
- Adição e gerenciamento de datas importantes (ex: aniversários, feriados, etc.)
- Notificações para lembrar os usuários das datas importantes

## Tecnologias Utilizadas

- **Next.js** - Framework React para SSR (Server-Side Rendering) e API integrada
- **PostgreSQL** - Banco de dados relacional para armazenar usuários, datas e lembretes
  
## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **PostgreSQL** (docker instalado e rodando)
- **npm**

### Passo a Passo

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/lembrapp.git
    ```

2. Entre no diretório do projeto:

    ```bash
    cd lembrapp
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:

    ```bash
    DATABASE_URL=postgresql://<usuario>:<senha>@localhost:5432/lembrapp
    ```

5. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

6. Acesse o app em seu navegador:

    ```bash
    http://localhost:3000
    ```
