/// <reference types="cypress" />

describe('blog page', () => {
  it('should allow user to visit blog and article', () => {
    cy.visit('https://shopmtn.co.uk');

    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();

    cy.contains('.gr-footer__nav-link', 'BLOG')
      .click();

    cy.url()
      .should('include', '/blogs/news');

    cy.get('h1')
      .should('contain.text', 'News');

    cy.get('.gr-blog-search')
      .should('exist');

    cy.get('.gr-main-blog__tags-list')
      .should('exist');

    cy.get('div.gr-main-blog__articles')
      .find('a')
      .its('length')
      .should('be.gt', 1);

    cy.get('.gr-pagination__list')
      .should('exist');

    cy.contains('.gr-article-card__heading', 'Everything You Should Know About Bahco Secateurs')
      .click();

    cy.get('.klaviyo-close-form')
      .click();

    cy.contains('h1', 'Everything You Should Know About Bahco Secateurs')
      .should('exist');

    cy.get('.gr-author-info')
      .should('exist');

    cy.get('.gr-sharing-wrap')
      .should('exist');

    cy.get('div.gr-additional-articles')
      .find('a')
      .its('length')
      .should('be.gt', 1);

  });
});