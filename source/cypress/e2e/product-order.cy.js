/// <reference types="cypress" />

import { ProductPage } from "../support/page_object/product.po"
describe('Product Page', ()=> {
    const productElement = new ProductPage()
    beforeEach(()=>{        
        cy.intercept('POST', '**/submit?universe=UNIVERSE&token=TOKEN', {statusCode: 204})
        cy.login()
    })

    it('should display product by default ascending order', () => {
        productElement.selectedOption().should('have.text', 'Name (A to Z)')
        cy.fixture("automationData").then(($name)=>{
            productElement.productNameList().each((list,$index)=>{
                expect(list.text()).contain($name.productName[$index])
            })
        })
    })

    it('should display product by descending order on order change', () => {
        productElement.selectOption().select('Name (Z to A)')        
        cy.fixture("automationData").then(($name)=>{
            $name.productName.reverse()
            productElement.productNameList().each(($item,index)=>{
               expect($item.text()).contain($name.productName[index])
            })
        })
    })

    it('should display product by Price low to high', () => {
        productElement.selectOption().select('Price (low to high)')        
        cy.fixture("automationData").then(($name)=>{
            productElement.productPriceList().each((list,$index)=>{
                expect(list.text()).contain($name.productPrice[$index])
            })
        })
    })

    it('should display product by Price high to low', () => {
        productElement.selectOption().select('Price (high to low)')        
        cy.fixture("automationData").then(($name)=>{
            $name.productPrice.sort((a, b)=> b - a)
            productElement.productPriceList().each((list,$index)=>{
                expect(list.text()).contain($name.productPrice[$index])
            })
        })
    })
})