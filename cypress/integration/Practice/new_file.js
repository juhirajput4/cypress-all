/// <reference types="cypress" />

describe('My first test suite',function()
{
    it('My first test case', ()=>
    {
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type('cypress')
        cy.get('div.FPdoLc center input[name=btnK]').click({force:true})
        // cy.get('form').submit()
        //cy.get('input[data-ved="0ahUKEwikna3r2eH3AhXIB94KHQ6hAAAQ4dUDCA0"]').click()
    }

    )
    it('open salesforce',()=>
    {
        cy.visit('https://login.salesforce.com/?locale=us')
        cy.get('#username').type('juhi@cloudanalogy.com')
        cy.get('#password').type('rajput44')
        cy.get('#Login').click()
        cy.get('#emc').type('490555')
        cy.get('#save').click()
    }
    )

}
)

