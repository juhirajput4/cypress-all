const auto_exer= require('../fixtures/automation_exercise.json')
Cypress.Commands.add('login_user',function()
{
    cy.get('input[data-qa=login-email]').type(auto_exer.email)
    cy.get('input[data-qa=login-password]').type(auto_exer.password)
    cy.get('button[data-qa=login-button]').click()
})
Cypress.Commands.add('logout_user',function()
{
    //cy.url().should('include','login')
    cy.get('a[href="/logout"]').click()
})