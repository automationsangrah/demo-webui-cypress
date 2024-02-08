/// <reference types="cypress" />

export class Cart {
    shoppingCartBadge() {
        return cy.get('.shopping_cart_badge')
    }
    shoppingCartButton() {
        return cy.get('.shopping_cart_link')
    }
    yourCartTitle() {
        return cy.get('#header_container .title')
    }

    continueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]')
    }
    checkoutButton() {
        return cy.get('[name="checkout"]')
    }
    cartItemRemoveButton() {
        return cy.get('.cart_button')
    }
}