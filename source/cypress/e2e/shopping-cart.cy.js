/// <reference types="cypress" />

import { ProductPage } from "../support/page_object/product.po"
import { Cart } from "../support/page_object/cart.po"
describe('Product Page', ()=> {
    const productElement = new ProductPage()
    const cartElement = new Cart()
    beforeEach(()=>{        
        cy.login()
    })

    it('should verify added item to shopping cart badge', () => {
        productElement.AddRemoveToCartButton().first().should('be.visible').click()
        cartElement.shoppingCartBadge().should('have.text', '1')
    })

    it('should verify details and empty cart of cart page',()=>{
        cartElement.shoppingCartBadge().should('not.exist')
        cartElement.shoppingCartButton().should('be.visible').click()
        cartElement.shoppingCartButton().should('have.text', '')
        cartElement.yourCartTitle().should('have.text', 'Your Cart')
        cartElement.continueShoppingButton().should('have.text', 'Continue Shopping')
        cartElement.checkoutButton().should('have.text', 'Checkout')
    })

    it('should remove item from cart', ()=>{
        productElement.AddRemoveToCartButton().first().should('be.visible').click()
        productElement.AddRemoveToCartButton().eq(1).should('be.visible').click()
        cartElement.shoppingCartBadge().click()
        cy.fixture('automationData').then(($itemName)=>{
            productElement.productNameList().each((cartItemName, index)=>{
                expect(cartItemName.text()).contain($itemName.productName[index])
            })
        })
        cartElement.cartItemRemoveButton().should('have.length', 2)
    })
})