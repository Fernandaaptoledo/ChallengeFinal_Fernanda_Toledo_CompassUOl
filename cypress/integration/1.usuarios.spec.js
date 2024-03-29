/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import { faker } from '@faker-js/faker'
import Factory from '../fixtures/factory'

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

  it('Deve buscar todos os usuários cadastrados na Serverest', () => {
    Serverest.buscarUsuarios().then(res => {
      cy.contractValidation(res, 'get-usuarios', 200)
      ValidaServerest.validarBusacaDeUsuarios(res)
    })
  })

  //it('Não deve postar um novo usuário administrador existente', () => {
    //cy.postarUsuariosSemSucesso().then(res => {
      //expect(res).to.be.a('object')
      //expect(res.body.message).to.be.a('string')
      //expect(res.body.message).to.be.eq('Este email já está sendo usado')
   // })
  //})


  it('Deve realizar login com sucesso', () => {
    Serverest.buscarUsuarioParaLogin()
    cy.get('@usuarioLogin').then(usuario => {
      Serverest.logar(usuario).then(res => {
        ValidaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })

  it('Deve buscar e salvar um usuario em um arquivo json', () => {
    const inteiro = Factory.gerarInteiroAleatorio()
    Serverest.buscarUsuarios().then(res => {
      cy.writeFile('./cypress/fixtures/usuario.json', res.body.usuarios[inteiro])
      ValidaServerest.validarBusacaDeUsuarios(res)

    })
  })

  it('Deve buscar o usuario de um arquivo json', () => {
    cy.fixture('usuario.json').then(json => {
      let usuario = {
        email: json.email,
        password: json.password
      }
      Serverest.logar(usuario).then(res => {
        ValidaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })
})


