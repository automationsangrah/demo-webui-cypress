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
    loginErrorCloseButton() {
        return cy.get('svg.error_icon')
    }
    loginErrorMessage() {
        return cy.get('h3[data-test="error"]')
    }
    loginErrorMessageCloseButton() {
        return cy.get('button.error-button')
    }
}