# Testes Automatizados com JEST - Em uma API Rest
Este projeto tem como objetivo a criação de testes automatizados para uma API REST utilizando o framework Jest.

# Clone o repositório
git clone https://github.com/taynaraluanacaetano/jest-test-automatizado-api-rest.git

# Navegue até o diretório do projeto
cd jest-test-automatizado-api-rest

# Instale as dependências
npm install

# Execução do Teste
Para que você consiga executar o teste, após instalada as dependências, utilize o comando:
`npm run test`

# Relatórios
A aplicação fornece um relatório visual, com isso você pode acessar a pasta jest-stare e procurar pelo arquivo index.html, abra-o em seu navegador.
Você verá a execução dos testes sendo apresentada de forma visual.

# Referencias
Documentação do Jest: `https://jestjs.io/` 
Node.js: `https://nodejs.org/pt`

# Histórico de Versões
  - 1.0.0: MAIN: Primeira versão do projeto com os testes do CRUD completos para a API de cadastro de usuários, bem como geração de relatórios.











Documentação

 você também terá a missão de validar, os dados da documentação se os mesmos estão devidamente retornando os status corretos,
 as mensagens previamente descritivas,
  também se todos os campos que estamos passando de fato são campos que precisam estar informados na documentação,
   tanto em seu envio, quanto em seu retorno.


   Get 

    dados documentação OK
    Retornando status corretos OK
    Mensagem descritiva OK
    Campos Envio OK
    Campos Retorno OK

   Post

    dados documentação 
      201 conteudo criado com sucesso OK
      422 "Campos extras encontrados: id, dataCadastro" BUG
      422 "Os seguintes campos são obrigatórios: conteudo" BUG
      400 Error: Bad Request   BUG  
    
    Retornando status corretos X BUG
    Mensagem descritiva OK
    Campos Envio X BUG 
    Campos Retorno  OK


   Get ID
    dados documentação 
      200 conteudo encontrado OK
      404 conteudo nao encontrado OK
    Retornando status corretos OK
    Mensagem descritiva OK
    Campos Envio ID OK
    Campos Retorno OK


   Delete

    dados documentação 
      200 conteudo encontrado OK
      404 conteudo nao encontrado OK
    Retornando status corretos OK
    Mensagem descritiva OK
    Campos Envio ID OK
    Campos Retorno OK 

   Put

    dados documentação 
      201 conteudo atualizado com sucesso OK
      404 conteudo nao encontrado OK
      422   "error": "Campos extras encontrados: id, dataCadastro" X  BUG
      400 ERROR: Bad Request   X BUG


    Retornando status corretos  OK
    Mensagem descritiva  OK
    Campos Envio ID X  Campos extras encontrados: id, dataCadastro BUG 
    Campos Retorno OK
   


