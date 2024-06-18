/// <reference types="cypress" />
describe('Dropdown',function()
{
    it('Select option1',()=>
    {
        cy.visit('https://courses.letskodeit.com/practice')
        cy.get('#multiple-select-example').select(['Apple','Orange']).invoke('val').should('deep.equal',['apple','orange'])
        
    })
})


describe.only('element are Enabled/Disabled Example',()=>
{
    it('verify input box should be enable before clicking any button',()=>
    {
        cy.visit('https://courses.letskodeit.com/practice')
        cy.get('#enabled-example-input').should('be.enabled').type('abc')
    })
    it('click on disable button',()=>
    {
        cy.visit('https://courses.letskodeit.com/practice')
        cy.get('#disabled-button').click()
        cy.get('#enabled-example-input').should('be.disabled')
        cy.pause()
        cy.get('#enabled-button').click()
        cy.get('#enabled-example-input').should('be.enabled').type('pc')
    })
    it('click on enable button',()=>
    {
        cy.visit('https://courses.letskodeit.com/practice')
        cy.get('#enabled-button').click()
        cy.get('#enabled-example-input').should('be.enabled').type('pc')
    })
})