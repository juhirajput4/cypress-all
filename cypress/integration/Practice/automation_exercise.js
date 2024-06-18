/// <reference types="cypress" />
const auto_exer = require('../../fixtures/automation_exercise.json')
const support_file = require('../../support/automation_ex')
describe('open login and signup page',function()
{
    it('open login and signup page',()=>
    {
        cy.visit(auto_exer.url)
        cy.get('a[href="/login"]').click()
        cy.url().should('include','login')
        cy.get('input[data-qa="signup-name"]').type(auto_exer.name)
        cy.get('input[data-qa=signup-email]').type(auto_exer.email)
        cy.get('button[data-qa=signup-button]').click()
        cy.url().should('include','signup')
        //cy.title('Enter Account Information')
        cy.get('input[value=Mrs]').click()
        cy.get('input[data-qa=name]').should('have.value',auto_exer.name).should('be.enabled')
        cy.get('#email').should('have.value',auto_exer.email).should('be.disabled')
        cy.get('#password').type(auto_exer.password)
        cy.get('#days').select(auto_exer.date)
        cy.get('#months').select(auto_exer.months)
        cy.get('#years').select(auto_exer.year)
       /* cy.get('#uniform-newsletter').should('have.value','Sign up for our newsletter!').check()
        cy.get('#uniform-optin').should('have.value','Receive special offers from our partners!').check()*/
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type(auto_exer.first_name)
        cy.get('#last_name').type(auto_exer.last_name)
        cy.get('#company').type(auto_exer.company)
        cy.get('#address1').type(auto_exer.address)
        cy.get('#country').select(auto_exer.country)
        cy.get('#state').type(auto_exer.state)
        cy.get('#city').type(auto_exer.city)
        cy.get('#zipcode').type(auto_exer.zipcode)
        cy.get('#mobile_number').type(auto_exer.mobile_no)
        cy.get('button[data-qa=create-account]').click()
        cy.url().should('include','account_created')
        //cy.title('Account Created!')
        cy.get('a[data-qa=continue-button]').click()
        cy.url().should('not.include','account_created')
    

        
        /*logout
        cy.get('a[href="/logout"]').click()
        cy.url().should('include','login')*/
        cy.logout_user(support_file) //This is use when we are again and again login and logout and it store in the "automation_ex.js" file

        //Login page
        /*cy.get('input[data-qa=login-email]').type(auto_exer.email)
        cy.get('input[data-qa=login-password]').type(auto_exer.password)
        cy.get('button[data-qa=login-button]').click()

        cy.get('a[href="/logout"]').click()*/

        cy.login_user(support_file)
        cy.logout_user(support_file)
        cy.wait(3000)
        
    })
    it('open login',()=>
    {
        cy.visit(auto_exer.url)
        cy.get('a[href="/login"]').click()
        /*cy.get('input[data-qa=login-email]').type(auto_exer.email)
        cy.get('input[data-qa=login-password]').type(auto_exer.password)
        cy.get('button[data-qa=login-button]').click()

        cy.get('a[href="/logout"]').click()*/

        cy.login_user(support_file)
        cy.logout_user(support_file)

         //add to cart
         /*cy.get('a[href="#Women"] i').click()
         cy.get('a[href="/category_products/2"]').click()
         cy.get('a[data-product-id=5]:visible').click()*/
         })
})