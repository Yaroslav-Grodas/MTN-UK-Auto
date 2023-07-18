/// <reference types="cypress" />

describe('Filter functionality', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');

    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();
  });
  
  it('should allow user to use filter', () => {

    cy.contains('.gr-header-menu__link', 'Tools')
      .click();

    cy.get('button.klaviyo-close-form')
      .click();

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('.gr-filters')
      .should('exist');

    cy.contains('h3', 'Brand')
      .should('exist');

    cy.contains('h3', 'Price')
      .should('exist');

    cy.contains('h3', 'Color')
      .should('exist');

    cy.contains('h3', 'Product Type')
      .should('exist');

    cy.contains('h3', 'Detail')
      .should('exist');

    /*const expectedNames = ['Name 1', 'Name 2', 'Name 3']; // Replace with your expected names

    cy.get('[data-index="1"] ul.list li').each((li, index) => {
      cy.wrap(li).should('exist').invoke('text').should('equal', expectedNames[index]);
    });*/

    cy.contains('.gr-checkbox-wrap', 'Batavia')
      .click();

    cy.get('body')
      .click('center', { force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      cy.wrap(productCard).should('contain.text', 'Batavia');
    });

   /* cy.get('#gr-btn-filters-show')
      .click({ force: true });

    cy.wait(5000);

    cy.contains('button.gr-show-more-options-btn', 'Show more options')
      .click();
    
    cy.contains('.gr-checkbox-wrap', 'Checkmate')
    .click();

    cy.contains('button.gr-show-more-options-btn', 'Show more options')
      .click();

    cy.contains('.gr-filter-item', 'Tools')
      .click();

    cy.get('body')
    .click('center', { force: true });

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      cy.wrap(productCard)
        .find('a') // Assuming the href is within an anchor tag
        .should('have.attr', 'href')
        .and('include', 'tool');
    });*/

  });

  it.only('should filter prices', () => {
      
    cy.contains('.gr-header-menu__link', 'Workwear')
      .click();

    
    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('#filterPriceRangeMin')
      .type('1000');

      cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });
    
    
    


    cy.wait(10000);



    cy.get('li.gr-collection-list__item') // Selecting <li> elements with class "gr-collection-list__item"
  .each((listItem) => {
    cy.wrap(listItem)
      .find('div.gr-card-rich-product__details') // Targeting the div with class "gr-card-rich-product__details"
      .find('div.gr-card-rich-product__price') // Targeting the div with class "gr-card-rich-product__price"
      .invoke('text')
      .then((priceText) => {
        const prices = priceText.trim().split('£'); // Splitting the concatenated prices

        prices.forEach((price) => {
          if (price) {
            const priceValue = parseFloat(price);
            expect(price).to.match(/^\d+(\.\d+)?$/); // Matches the price format (e.g., 2, 2.01, 2.123, etc.)
            expect(priceValue).to.be.greaterThan(999); // Asserts that the price is greater than 30
          }
        });
      });

    // Add any additional assertions or actions you need here
  });




  });
      

});