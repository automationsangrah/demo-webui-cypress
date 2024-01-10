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
 Cypress.Commands.add('login', (email, password) => {
    const loginPageElement = new LoginPage()
    cy.visit(Cypress.env('loginBase'))
    loginPageElement.userName().should('be.visible').type('standard_user')
    loginPageElement.password().should('be.visible').type('secret_sauce')
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