/// <reference types="cypress" />

describe('User can send contact form and feedback form', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');
    
    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();
    
    cy.wait(20000);
    
    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();
  });
  
  it('should allow user to send contact form', () => {
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
      .type('+123456789012');

    cy.get('#ContactForm-body')
      .type('test comment');

      cy.get('.gr-field button.gr-btn').then($button => {
        const buttonPosition = $button[0].getBoundingClientRect();
        const middleX = buttonPosition.left + buttonPosition.width / 2;
        const middleY = buttonPosition.top + buttonPosition.height / 2;
      
        cy.get('.gr-field button.gr-btn')
          .scrollIntoView()
          .trigger('mousedown', { button: 0 })
          .trigger('mouseup', { button: 0 });
      });

    

    cy.get('h2')
      .should('contain.text', "Thanks for contacting us. We'll get back to you as soon as possible.")
  });

  it.skip('should allow user to send feedback form', () => {

  });
});