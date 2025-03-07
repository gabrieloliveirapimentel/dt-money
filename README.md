# DT Money
Este é um projeto de uma carteira desenvolvido durante o curso Ignite da Rocketseat.

## Rodar o server

Para rodar o `json-server`, execute o seguinte comando:
```bash
npx json-server server.json -p 3333 -w
```

Ou, pelo comando já configurado no `package.json`:
```bash
npm run dev:server  
```

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- Node.js
- Yarn

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
yarn install
```

## Rodando o Projeto

Para iniciar o projeto em modo de desenvolvimento, utilize o comando:

```bash
yarn dev
```

## Tecnologias Utilizadas

- React
- TypeScript
- Styled-components
- Vite
- JSON Server
- React Hook Form
- Axios

## Observação
O JSON Server na versão mais atual não aceita campo de pesquisa com formato ``https://localhost:3001/transactions?q=value``, para solucionar isso, basta instalar a versão 0.17.4:

```bash
npm i json-server@0.17.4 -D    
```

## Estrutura do Projeto

- `src`: Contém o código fonte do projeto.
- `public`: Contém os arquivos estáticos.

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
