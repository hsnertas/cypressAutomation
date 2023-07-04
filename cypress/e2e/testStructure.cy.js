/// <reference types="cypress" />


describe ('Context: My First Tests', ()=>{

    before(()=>{
        //runs once before all test cases in this decribe block, like beforeClass in TestNG
    })

    beforeEach(()=>{

        cy.clearAllCookies();
    })

    after(()=>{

        //runs once after all tests finished similar to afterlcass
    })

    afterEach(()=>{
        //similar to afterMethod in TestNG
    })

    it('Opening a web application', ()=>{
        cy.visit('https://practice.cydeo.com/');
        cy.get('.list-group > :nth-child(1) > a').click();
        cy.get('.nav-link').click();
    })

})