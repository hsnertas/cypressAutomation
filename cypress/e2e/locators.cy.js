/// <reference types="cypress" />

describe("Find or Get Elements by Using Diffrent Locators", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.visit("/login");
  });

  it("Check different locators strategies", () => {
    cy.get("input[name='username']").type("CydeoStudent");// every statment create onject to be interacted , and next command makes operation to object created at the prebious statement
    cy.get("[type='text']").clear();
    //cy.get("input[name='password']").type()
    //cy.get("")
    cy.get("input").each((item, index, list)=>{

        // asser the lenght of  list of 2

        expect(list).to.have.length(2);
        expect(item).to.have.attr("type");


    })
   //by attribute
    cy.get('[type');

    //by className
    cy.get('.btn.btn-primary');

    //by class
    cy.get("#wooden_spoon");

    //if I want to use text: no xpath in cypress
    cy.get('button').should('contain','Login').click();



  })

  it('Check finding elements by traveling through DOM', ()=>{

   // travel to fin login button
   cy.get("input[name='username'").parents("form").find("button").should('contain', 'Login').click();


  })

  it.only('Check diffrent type of assertions', ()=>{

// Cypress itself bundles assertion provided by Chai, Sinon and JQuery libraries

cy.get("#wooden_spoon").should('contain', 'Login').and('have.class', 'btn btn-primary');

// expect assertion:  this also called explicity verify

cy.get("#wooden_spoon").then((buttonElement)=>{
    expect(buttonElement).to.have.text('Login');
    expect(buttonElement).to.have.class('btn btn-primary');
})

  })
})
