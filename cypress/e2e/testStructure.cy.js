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

    it.skip('Opening a web application', ()=>{
        cy.visit('https://practice.cydeo.com/');
        cy.get('.list-group > :nth-child(1) > a').click();
        cy.get('.nav-link').click();
    })

    it('Test 2',()=>{
        expect(false).to.equal(false);
    })

    xit('Test 3',()=>{
        expect(false).to.equal(true);
    })

    it.skip('Test 4',()=>{
        expect(5).to.equal(4);
    })

    it('Test 5',()=>{
        expect(true).to.equal('5'==5);
    })


})