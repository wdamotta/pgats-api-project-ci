const request = require('supertest');
const { faker } = require('@faker-js/faker');
const{
    URLS
} = require('../../suporte/configEnv')

describe ('PGATS - Automação de Testes de API REST', ()=>{

    let conteudoCriadoID;
    let payloadConteudos;
    let responseCreate;


    beforeAll(async()=>{
        payloadConteudos = {
            "titulo": faker.string.alpha(10),
            "descricao": faker.string.alpha(30),
            "tipoConteudo": faker.string.alpha(10),
            "conteudo": faker.string.alpha(50)
        }
        responseCreate = await request(URLS.ROTA_ENDPOINT)
        .post('/conteudos')
        .send(payloadConteudos)
        conteudoCriadoID = responseCreate.body.id;
        expect(responseCreate.statusCode).toBe(201);
    });
    
//validar todos statusCode // similar com o teste integrado//

    it('Test 01: Cadastrando usuario e validando dados enviados e statusCode 201.', async()=>{
        expect(responseCreate.body.id).toBeDefined();
        expect(responseCreate.body.titulo).toBe(payloadConteudos.titulo);
        expect(responseCreate.body.descricao).toBe(payloadConteudos.descricao);
        expect(responseCreate.body.tipoConteudo).toBe(payloadConteudos.tipoConteudo);
        expect(responseCreate.body.conteudo).toBe(payloadConteudos.conteudo);
        expect(responseCreate.body.dataCadastro).toBeDefined;
        expect(responseCreate.statusCode).toBe(201);

    })

    it('Teste 02: Deve consultar o registrado cadastrado anteriormente e validar resultado e statusCode', async()=>{
        const responseGet = await request(URLS.ROTA_ENDPOINT)
        .get(`/conteudos/${conteudoCriadoID}`)
        expect(responseGet.body.titulo).toBe(responseCreate.body.titulo);
        expect(responseGet.body.descricao).toBe(responseCreate.body.descricao);
        expect(responseGet.body.tipoConteudo).toBe(responseCreate.body.tipoConteudo);
        expect(responseGet.body.conteudo).toBe(responseCreate.body.conteudo);
        expect(responseGet.body.dataCadastro).toBeDefined;
        expect(responseGet.statusCode).toBe(200);

    })

    it('Teste 03: Deve alterar o conteudo cadastrado anteriormente, e validar que os dados foram realmente alterados', async()=>{
        const novoConteudoAlterado = {
            "titulo": "titulo alterado",
            "descricao": "descricao alterada",
            "tipoConteudo": "tipo de conteudo alterado",
            "conteudo": "descricao alterada"
        }
        const responsePut = await request(URLS.ROTA_ENDPOINT)
        .put(`/conteudos/${conteudoCriadoID}`)
        .send(novoConteudoAlterado)
        expect(responsePut.body.titulo).toBe(novoConteudoAlterado.titulo);
        expect(responsePut.body.descricao).toBe(novoConteudoAlterado.descricao);
        expect(responsePut.body.tipoConteudo).toBe(novoConteudoAlterado.tipoConteudo);
        expect(responsePut.body.conteudo).toBe(novoConteudoAlterado.conteudo);
        expect(responsePut.statusCode).toBe(201);;
    })

    it('Teste 04: Deve remover o registro cadastrado, e validar a consulta do registro para garantir sua remoção', async()=>{
        const responseDelete = await request(URLS.ROTA_ENDPOINT)
        .delete(`/conteudos/${conteudoCriadoID}`)
        expect(responseDelete.status).toBe(200);
        expect(responseDelete.body).toEqual({ message: 'O conteúdo foi removido com sucesso!' });
        const responseCheck = await request(URLS.ROTA_ENDPOINT)
        .get(`/conteudos/${conteudoCriadoID}`)
        expect(responseCheck.statusCode).toBe(404);
        expect(responseCheck.body).toEqual({ error: "O conteúdo com o ID: "+conteudoCriadoID+" não foi encontrado."});
    })

})