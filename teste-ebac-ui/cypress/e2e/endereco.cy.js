/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flávio', 'Silva', 'Americanas', 'Brasil', 'Av Brasil', '3100', 'São Paulo', 'São Paulo', '22255-080', '21975634569', 'flavio@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});