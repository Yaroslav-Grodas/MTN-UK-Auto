/// <reference types="cypress" />

describe('All policy links should be active', () => {
  beforeEach(() => {
    cy.visit('/');
    
    
  })  
  
  it('should open Terms of Service', () => {
    cy.contains('.gr-footer__nav-link', 'TERMS OF SERVICE')
      .click();

    cy.assertPageUrl('/pages/sales-policy');

    cy.get('h1')
      .should('contain.text', 'Terms of Sale');

    cy.get('h2')
      .should('contain.text', 'Terms And Conditions')
  });

  it('should open Refund Policy', () => {
    cy.contains('.gr-footer__nav-link', 'REFUND POLICY')
      .click();

    cy.assertPageUrl('/pages/refund-return-policy');

    cy.get('h1')
      .should('contain.text', 'Return & Exchange Policy');
  });

  it('should open Privacy Policy', () => {
    cy.contains('.gr-footer__nav-link', 'PRIVACY POLICY')
      .click();

    cy.assertPageUrl('/pages/privacy-policy');

    cy.get('h1')
      .should('contain.text', 'Privacy Policy'); 
  });
});