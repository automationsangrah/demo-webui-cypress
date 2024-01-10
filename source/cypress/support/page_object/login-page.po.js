/// <reference types="cypress" />

export class LoginPage {
    loginLogo() {
        return cy.get('.login_logo')
    }
    userName() {
        return cy.get('#user-name')
    }
    password() {
        return cy.get('#password')
    }
    loginButton() {
        return cy.get('[data-test="login-button"]')
    }
}