/// <reference types="cypress" />

describe('Resources page', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');

    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();
  });
  
  it.skip('should allow user to visit Resources page', () => {

    cy.contains('.gr-footer__nav-link', 'RESOURCES')
      .click();

    cy.url()
      .should('include', '/pages/resources');

    cy.get('h1')
      .should('contain.text', 'Resources');

    cy.get('div.gr-main-page__content')
      .find('a')
      .its('length')
      .should('be.gt', 1);
  });

  it('should alloww user to visit Feedback page', () => {
    cy.contains('.gr-footer__nav-link', 'FEEDBACK')
      .click();

    cy.contains('.form-title', 'Share Your Thoughts!')



  });
});