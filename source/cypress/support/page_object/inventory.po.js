/// <reference types="cypress" />

export class InventoryPage {
    appLogo() {
        return cy.get('.app_logo')
    }
    inventoryMenu() {
        return cy.get('#react-burger-menu-btn')
    }
    menuItemList() {
        return cy.get('.bm-item-list > a')
    }
    logoutLink() {
        return cy.get('#logout_sidebar_link')
    }
}
