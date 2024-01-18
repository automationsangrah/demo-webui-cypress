/// <reference types="cypress" />

import { LoginPage } from '../support/page_object/login-page.po'

describe('Inventory', ()=> {
    const loginElement = new LoginPage()
    beforeEach(()=>{
        cy.login()
    })

    it('should verify default on the page', () => {
        loginElement.loginLogo().should('have.text', 'Swag Labs')
    })
})