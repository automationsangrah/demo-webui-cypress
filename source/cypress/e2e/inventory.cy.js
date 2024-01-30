/// <reference types="cypress" />

import { InventoryPage } from '../support/page_object/inventory.po'
import { LoginPage } from '../support/page_object/login-page.po'

describe('Inventory', ()=> {
    const inventoryElement = new InventoryPage()
    const loginElement = new LoginPage()
    beforeEach(()=>{
        cy.login()
    })

    it('should verify title and logo of the page', () => {
        inventoryElement.appLogo().should('have.text', 'Swag Labs')
        cy.title().should('eq','Swag Labs')
    })

    it('should click on inventory menu and verify menu list', () => {
        inventoryElement.inventoryMenu().should('be.visible').click()
        cy.fixture('automationData').then((itemData)=>{
            inventoryElement.menuItemList().each((itemPage, index)=>{
                expect(itemPage.text()).eq(itemData.inventoryMenuList[index])
            })
        })
    })

    it('should click on logout page, on click of back should show error', () => {
        inventoryElement.inventoryMenu().should('be.visible').click()
        inventoryElement.logoutLink().should('be.visible').click()
        loginElement.loginLogo().should('have.text', 'Swag Labs')
        cy.go(-1)  // Clicking back browser, can achieve same by cy.go('back)
        loginElement.loginErrorCloseButton().first().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginElement.loginErrorCloseButton().last().should('be.visible').should('have.css', 'color', 'rgb(226, 35, 26)')
        loginElement.loginErrorMessage().should('have.text', 'Epic sadface: You can only access \'/inventory.html\' when you are logged in.')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
    })
})