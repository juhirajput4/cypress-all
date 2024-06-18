/// <reference types="cypress" />
/* we can write function() or ()=> is called lazy and set operator, both are same*/
describe('My practice paper one',function()
{
    it('check only option1',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check()
    }
    ) 
    it('checked all the option',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check()
    })
    it('if we have option1 value then check option1 and option2',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').should('have.value','option1').check(['option1','option2'])
    })
    it('mark checked only if all option are unchecked and uncheched option1',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        //cy.get('input[type="checkbox"]').should('have.value','option1').check()
        cy.pause()
        cy.get('input[type="checkbox"]').should('not.be.checked').check()
        cy.pause()
        cy.get('input[type="checkbox"]').uncheck(['option1'])

    })

}
    
)
describe('radio button',function()
{
    it('select radio1',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').click()
        cy.pause()
        cy.get('input[value="radio2"]').click()
    })
    it('click only if option are unclick',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').should('have.value','radio1').click()
        cy.pause()
        cy.get('input[value="radio1"]').click()

    })
    it('all radio button cannot be click at same time',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[name="radioButton"]').click({ multiple: true })
    })

})
describe('Dropdown',function()
{
    it('Select option1',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.pause()
        cy.get('#dropdown-class-example').select('Select')
    })
    it('Select text select',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Select')
        
    })
})
describe('suggession class example',()=>
{
    it('write any country name ',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('In')
            cy.get('.ui-menu-item').each(($element,index,$list)=>
            {
                cy.log($element.text())
                if($element.text()==='India')
                {
                    $element.click()
                }
            })
            
        })
    })

describe('open window',()=>
{
    it('open window',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').click()
    })
})
describe('open tab',()=>
{
    it('open tab',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(2000)
        cy.go(-1)
        cy.url().should('include','Practice')
        cy.ur
        cy.pause()
        cy.go(1)
        cy.url().should('not.include','AutomationPractice')
    })
    it('open window example',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then((openTabAttribute)=>
        {
            const url= openTabAttribute.prop('href')       // Prop is a Jquery command
            cy.log(url)
            cy.visit(url)
        }
        )
        cy.url().should('not.include','AutomationPractice')
    })
})

describe('Switch To Alert Example',()=>
{
    it('click on alert button',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        const name = 'prateek'
        cy.get('#name').type(name)
        cy.get('#alertbtn').click()
        cy.on('window:alert',(alert_message)=>
        {
            expect(alert_message).to.equal('Hello ' + name + ', share this practice page and share your knowledge')
        })
    })
    it('click on confirm button',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        const name = 'prateek'
        cy.get('#name').type(name)
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(confirm_msg)=>
        {
            expect(confirm_msg).to.equal('Hello ' + name + ', Are you sure you want to confirm?')
            return false
        })
        
    })
    
})

describe('element displayed example (Hide/show)',()=>
{
    it('verify input box before clicking hide button',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('not.be.hidden')
    })
    it('click on hide button',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('be.hidden')
    })
    it('click on show button',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('not.be.hidden').type('chhavi')
    })
})

describe('Hover example',()=>
{
    it('hover',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','#top')
        cy.pause()
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click()
        cy.url().should('not.include','#top')
    })
})

describe('web table ',()=>
{
    it('find price from web table',()=>
    {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('table.table-display tbody tr td:nth-child(2)').each(($element,index,$list)=>
        {
            const el= $element.text()
            if(el.includes('Agile'))
            {
                cy.get('table.table-display tbody tr td:nth-child(2)').eq(index).next().then((Price)=>
                {
                    const pri=Price.text()
                    cy.log(pri)
                    expect(pri).be.eq('25')
                })
            }
        })
       
    })

    //we cannot find next to next row example if we find 'City' of the 'Joe' we can't find only "city"


    it.only('web Table test case',function()
    {
      cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
      cy.get('div.tableFixHead tbody tr td:nth-child(1)').each(($el,index,$list)=>
       {
         const Txt=$el.text()
         if(Txt.includes('Joe'))
           {
             cy.get('div.tableFixHead tbody tr td:nth-child(1)').eq(index).nextUntil('tbody tr td:nth-child(4)').then(function(prateek)
             {
                const pricetext =prateek.text()
                cy.log(pricetext)
                expect(pricetext).to.equal('PostmanChennai')

             })
            }
            
        })
})
})
