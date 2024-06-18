export default class Practice_paper1
{
    checkbox()
    {
        return cy.get('#checkBoxOption1')
    }
    radiobutton()
    {
        return cy.get('input[value="radio1"]')
    }
    select()
    {
        return cy.get('#dropdown-class-example')
    }
    suggestion1()
    {
        return cy.get('#autocomplete')
                    
    }
    suggestion2()
    {
        return cy.get('.ui-menu-item')
    }
}