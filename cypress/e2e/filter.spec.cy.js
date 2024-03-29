/// <reference types="cypress" />

describe('Filter functionality', () => {
  beforeEach(() => {
    cy.visit('/');


    



  });
  
  it('should allow user to use filter', () => {

    cy.contains('.gr-header-menu__link', 'Workwear')
      .click();

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('.gr-filters')
      .should('exist');

    cy.wait(5000);

    cy.contains('h3', 'Brand')
      .should('exist');

    cy.contains('h3', 'Price')
      .should('exist');

    cy.contains('h3', 'Color')
      .should('exist');

    cy.contains('h3', 'Product Type')
      .should('exist');

    cy.contains('.gr-checkbox-wrap', 'Arbortec')
      .click();

    cy.get('body')
      .click('center', { force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      cy.wrap(productCard).should('contain.text', 'Arbortec');
    });

    
  });

  it('should check product type', () => {

    cy.contains('.gr-header-menu__link', 'Tools')
      .click();

    /*cy.get('button.klaviyo-close-form')
      .click();*/

    cy.get('#gr-btn-filters-show')
      .click({ force: true });

    cy.wait(5000);

    cy.contains('.gr-checkbox-wrap', 'AXE')
      .click({ force: true });

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      // Use .as() to alias the productCard element
      cy.wrap(productCard).as('productCard');
    
      // Now you can continue with further commands on the aliased productCard
      cy.get('@productCard')
        .find('.gr-card-rich-product__heading')
        .invoke('text')
        .should('include', 'Axe');
    });
    
      
      
      
  });

  it.skip('should filter prices', () => {
      
    cy.contains('.gr-header-menu__link', 'Workwear')
      .click();

    cy.get('#gr-btn-filters-show')
      .click();

    cy.contains('.ot-cookie', 'Got it!')
      .click();

    cy.get('#filterPriceRangeMin')
      .type('1000');

    cy.wait(10000);

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

      });

  });

  it('should filter via the color', () => {

    cy.contains('.gr-header-menu__link', 'Workwear')
      .click();

    cy.get('#gr-btn-filters-show')
      .click();

    cy.get('[data-name="Lime"]')
      .click();

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.contains('.gr-card-rich-product__heading', 'Arbortec Breatheflex Non-Protective Trousers')
      .click();

    cy.get('product-option')
      .should('contain', 'Lime');

  });

  it('should filter via detail', () => {
    
    cy.contains('.gr-header-menu__link', 'Tools')
      .click();

    /*cy.get('button.klaviyo-close-form')
      .click();*/

    cy.get('#gr-btn-filters-show')
      .click({ force: true });

    cy.wait(5000);

    cy.contains('.gr-checkbox-wrap', '1/2in')
      .click({ force: true });

    cy.get('div.gr-search-popup.gr-hidden')
      .find('a.gr-filters-close')
      .click({ force: true });

    cy.wait(10000);

    cy.get('.gr-card-rich-product__details').each((productCard) => {
      cy.wrap(productCard)
        .find('.gr-card-rich-product__heading')
        .invoke('text')
        .should('include', '1/2');
    });

  });
});