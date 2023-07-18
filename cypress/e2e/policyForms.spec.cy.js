/// <reference types="cypress" />

describe('All policy links should be active', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');
    
    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();
    
    cy.wait(20000);
    
    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();
  })  
  
  it('should open Terms of Service', () => {
    cy.contains('.gr-footer__nav-link', 'TERMS OF SERVICE')
      .click();

    cy.url()
      .should('include', '/sales-policy');

    cy.get('h1')
      .should('contain.text', 'Terms of Sale');

    cy.get('h2')
      .should('contain.text', 'Terms And Conditions')
  });

  it('should open Refund Policy', () => {
    cy.contains('.gr-footer__nav-link', 'REFUND POLICY')
      .click();

    cy.url()
      .should('include', '/refund-return-policy');

    cy.get('h1')
      .should('contain.text', 'Return & Exchange Policy');
  });

  it('should open Privacy Policy', () => {
    cy.contains('.gr-footer__nav-link', 'PRIVACY POLICY')
      .click();

    cy.url()
      .should('include', '/privacy-policy');

    cy.get('h1')
      .should('contain.text', 'Privacy Policy'); 
  });
});