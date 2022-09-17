/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import validaServerest from '../services/validaServerest.service'
import Factory from '../fixtures/factory'

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

  it('Deve buscar todos os usuários cadastrados na Serverest', () => {
    Serverest.buscarUsuarios().then(res => {
      validaServerest.validarBusacaDeUsuarios(res)
    })
  })

  it('Não deve postar um novo usuário administrador existente', () => {
    cy.postarUsuariosSemSucesso().then(res => {
      expect(res).to.be.a('object')
      expect(res.body.message).to.be.a('string')
      expect(res.body.message).to.be.eq('Este email já está sendo usado')
    })
  })

  it('Deve realizar login com sucesso', () => {
    Serverest.buscarUsuarioParaLogin()
    cy.get('@usuarioLogin').then(usuario => {
      Serverest.logar(usuario).then(res => {
        validaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })

  it('Deve buscar e salvar um usuario em um arquivo json', () => {
    let inteiro = Factory.gerarInteiroAleatorio()
    Serverest.buscarUsuarios().then(res => {
      cy.writeFile('./cypress/fixtures/usuario.json', res.body.usuarios[inteiro])
      validaServerest.validarBusacaDeUsuarios(res)
    })
  })

  it('Deve buscar o usuario de um arquivo json', () => {
    cy.fixture('usuario.json').then(json => {
      let usuario = {
        email: json.email,
        password: json.password
      }
      Serverest.logar(usuario).then(res => {
        validaServerest.validarLoginComSucesso(res)
        Serverest.salvarBearer(res)
      })
    })
  })
})


