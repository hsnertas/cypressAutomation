/// <reference types="cypress"/>


describe('Context: My First Test', ()=>{

beforeEach(()=>{

    cy.clearAllCookies();
    cy.visit("/multiple_buttons");
})



it('Check Diffrent Button Actions', ()=>{
 //select a button with text

 //cy.contains('Button 2').click();
 cy.contains('Button 2').should('be.visible').click();
 cy.contains('Clicked on button two!').should('be.visible');

 cy.get('.btn.btn-primary').then(($buttons)=>{
    cy.wrap($buttons).eq(2).click();
    cy.contains('Clicked on button three!').should('be.visible');
 })

 cy.get('button').each((item, index, list)=>{

//asserth of length of list, verify number of buttons, each method is creing me a loop

expect(list).to.have.length(6);
expect(item).to.have.attr('onclick');

 })


 // I will get all buttons like previous approach, get only the item then check for text of each item, if it is equal to Button4, then click on it.

 cy.get('button').each((item)=>{

    //asserth of length of list, verify number of buttons, each method is creing me a loop
    if(item.text()=="Button 4"){
        cy.log(item.text());
       // item.click(); you cannot use cypress click func on jQuesry element
       cy.wrap(item).click();
       cy.contains('Clicked on button four!').should('be.visible');
    }
    
     })


})


// npx cypress run --headless -b chrome

})