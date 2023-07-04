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

  });
});
