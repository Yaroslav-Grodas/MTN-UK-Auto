/// <reference types="cypress" />

describe('Inreasing and decreasing quantity of the product', () => {
  beforeEach(() => {
    cy.visit('/');

    


    
  });
  
  it('should add 1 product to the cart', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click( {force:true} );

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Advent')
      .click();

    cy.wait(10000);

    cy.get('h1')
      .should('contain.text', 'Advent')

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/advent-scotland-tape-measure-5m-16ft-display-of-12"]')
      .click();

    cy.intercept('POST', '/cart/add.js').as('adding');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@adding');
        cy.contains('.gr-cart__checkout-btn', 'View cart ')
          .click( {force: true} );
      });

    cy.wait(10000);

    cy.get('a.gr-cart-item__link')
      .should('contain.text', 'Advent Scotland Tape Measure 5m/16ft Display of 12');

      function extractLastDigitFromString(text) {
        const regex = /(\d+)\D*$/;
        const match = text.match(regex);
        return match ? parseInt(match[1]) : NaN;
      }
      
      cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
        .invoke('text')
        .then((initialQuantityText) => {
          const initialQuantity = extractLastDigitFromString(initialQuantityText);
      
          cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
      
          // Check if initialQuantity is a valid number
          if (!isNaN(initialQuantity)) {
            // Click the button to increase the quantity
            cy.get('.fa-plus').click({ force: true });
            cy.wait(3000);
      
            // Get the updated quantity
            cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
              .invoke('text')
              .then((updatedQuantityText) => {
                const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
      
                cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
      
                // Check if updatedQuantity is a valid number
                if (!isNaN(updatedQuantity)) {
                  // Assert that the updated quantity is exactly one greater than the initial quantity
                  expect(updatedQuantity).to.equal(initialQuantity + 1);
                } else {
                  throw new Error('Updated Quantity is NaN');
                }
      
                // Click the button to decrease the quantity
                cy.get('.fa-minus').click({ force: true });
                cy.wait(3000);
      
                // Get the decreased quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((decreasedQuantityText) => {
                    const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
      
                    cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
      
                    // Check if decreasedQuantity is a valid number
                    if (!isNaN(decreasedQuantity)) {
                      // Assert that the decreased quantity is exactly one less than the initial quantity
                      expect(decreasedQuantity).to.equal(initialQuantity);
                    } else {
                      throw new Error('Decreased Quantity is NaN');
                    }
                  });
              });
          } else {
            throw new Error('Initial Quantity is NaN');
          }
        });
    
  });
});