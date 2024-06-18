/// <reference types="cypress" />
/// <reference types='cypress-iframe' />
import 'cypress-iframe'
describe('iframe test',function()
{
    it('testing iframes',function()
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(5000)
        //cy.iframe().contains('mentorship').click()
        cy.iframe().find('h3.pricing-price').should('have.length',2)
    })
})