/// <reference types="cypress" />

import { LoginPage } from '../support/page_object/login-page.po'

describe('Login Page', ()=> {
    const loginPageElement = new LoginPage()
    
    beforeEach(()=>{
        cy.visit(Cypress.env('loginBase'))
    })

    it('should verify the login page',()=>{
        loginPageElement.loginLogo().should('have.text', 'Swag Labs')
        loginPageElement.userName().invoke('attr', 'placeholder').should('eq', 'Username')
        loginPageElement.password().invoke('attr', 'placeholder').should('eq', 'Password')
        loginPageElement.loginButton().should('have.value', 'Login')
    })

    it('should login successfully', ()=>{
        cy.login()
    })
})

