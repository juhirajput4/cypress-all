/// <reference types="cypress" />
import Practice_paper1 from '../../support/Page_object_model/practice_paper1_hooks'
const practice_paper =  new Practice_paper1()

//here we use page object model and hooks

describe('using with page object model',function()
{
    //-Hooks----
    
    before(function()
    {
        cy.log("juhi")
        cy.fixture('practice_paper1').then(function(Data)
        {
            this.data = Data
        })
    })
    it('first test ',function()
    {
        cy.visit('')
        practice_paper.checkbox().check()
        practice_paper.radiobutton().click()
        practice_paper.select().select(this.data.Option).should('have.value',this.data.option)
        practice_paper.suggestion1().type(this.data.country)
        practice_paper.suggestion2().each(($element,index,$list)=>
        {
            cy.log($element.text())
            if($element.text()==='India')
            {
                $element.click()
            }
        })
        

    })
})