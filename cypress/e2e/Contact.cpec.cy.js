/// <reference types="cypress" />

describe('User can send contact form', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');
    
   
  });
  
  it.skip('should allow user to send contact form', () => {
    cy.contains('.gr-footer__nav-link', 'CONTACT')
      .click();

    cy.url()
      .should('include', '/contact-us');

    cy.get('h1')
      .should('contain.text', 'Contact Us For Entertainment & Industrial Needs');

    cy.get('#ContactForm-name')
      .type('TestName');

    cy.get('#ContactForm-email')
      .type('testemail@gmail.com');

    cy.get('#ContactForm-phone')
      .type('123456789013');

    cy.get('#ContactForm-body')
      .type('test comment');

    cy.get('.gr-field') // Replace '.gr-field' with the appropriate class or selector for the field element
      .find('.gr-btn:contains("Send")') // Replace '.gr-btn' with the appropriate class or selector for the button within the field
      .should('be.visible') // Ensure the button is visible
      .scrollIntoView() // Scroll the button into view
      .click({ force: true }); // Click on the button

    cy.wait(2000)
    
    cy.get('h2')
      .should('contain.text', "Thanks for contacting us. We'll get back to you as soon as possible.")
  });

  
});