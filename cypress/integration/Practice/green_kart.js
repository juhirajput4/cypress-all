/// <reference types="cypress" />
describe('search vegetables',function()
{
    it.only('search ca',()=>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type=search]').type('ca')
        cy.wait(3000)
        cy.get('div.products').find('div.product').each(($elements,index,$list)=>
        {
            const vegtxt= $elements.find('h4.product-name').text()
            cy.log(vegtxt)
            if(vegtxt.includes('Cauliflower'))
            {
                //cy.get('input[type=number]').eq(index).clear().type(20)
                cy.get('a.increment').eq(index).dblclick()
                cy.wrap($elements).find('button').click()
            }
            
        }
        )
    })
    it('search ca',()=>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type=search]').type('ca')
        cy.wait(3000)
        cy.get('div.product').should('have.length',5)
        cy.get('div.product:visible').should('have.length',4)
        cy.get('div.products').as('prod')
        cy.get('@prod').find('div.product')

    })

    it('Click on TOP DEALS on same Tab',()=>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.cart-header-navlink:nth-child(2)').invoke('removeAttr','target').click()

    })
})