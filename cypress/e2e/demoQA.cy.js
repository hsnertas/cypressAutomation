/// <reference types="cypress" />


describe('Demoqa test', ()=>{


    beforeEach(()=>{

        cy.clearAllCookies();
    })



    it('Opening web application', ()=>{

        cy.visit('/alerts');

    })

})