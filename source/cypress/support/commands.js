// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { LoginPage } from '../support/page_object/login-page.po'
 Cypress.Commands.add('login', () => {
    const loginPageElement = new LoginPage()
    cy.visit(Cypress.env('loginBase'))
    cy.fixture('automationData').then((credentials)=>{
        loginPageElement.userName().should('be.visible').type(credentials.validUser.Username)
        loginPageElement.password().should('be.visible').type(credentials.validUser.Password)
        loginPageElement.loginButton().should('be.visible').click()
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })