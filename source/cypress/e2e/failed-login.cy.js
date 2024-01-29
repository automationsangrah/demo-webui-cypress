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
        cy.title().should('eq', 'Swag Labs')
    })

    it('should show error message for empty user name', () => {
        loginPageElement.loginButton().should('be.visible').click()
        loginPageElement.loginErrorCloseButton().first().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorCloseButton().last().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorMessage().should('have.text', 'Epic sadface: Username is required')
        .should('have.css', 'color', 'rgb(255, 255, 255)')   
    })

    it('should show error message for empty password', () => { 
        cy.fixture('automationData').then((credentials)=>{
            loginPageElement.userName().should('be.visible').type(credentials.validUser.Username)
            loginPageElement.loginButton().should('be.visible').click()
        })
        loginPageElement.loginErrorCloseButton().first().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorCloseButton().last().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorMessage().should('have.text', 'Epic sadface: Password is required')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it('should show error message for invalid credential', () => { 
        cy.fixture('automationData').then((credentials)=>{
            loginPageElement.userName().should('be.visible').type(credentials.invalidUser.Username)
            loginPageElement.password().should('be.visible').type(credentials.invalidUser.Password)
            loginPageElement.loginButton().should('be.visible').click()
        })
        loginPageElement.loginErrorCloseButton().first().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorCloseButton().last().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginPageElement.loginErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it('should not show any error on closing of error message', () => {
        loginPageElement.loginButton().should('be.visible').click()
        loginPageElement.loginErrorMessageCloseButton().should('be.visible').click()
        loginPageElement.loginErrorCloseButton().should('not.exist')
        loginPageElement.loginErrorMessage().should('not.exist')
    })
})

