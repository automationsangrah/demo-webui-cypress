/// <reference types="cypress" />

export class ProductPage {
    selectedOption() {
        return cy.get('.active_option')
    }
    productNameList() {
        return cy.get('.inventory_item_name')
    }
    productPriceList() {
        return cy.get('.inventory_item_price')
    }
    selectOption() {
        return cy.get('.select_container select')
    }
}