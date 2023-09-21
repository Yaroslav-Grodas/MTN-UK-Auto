/// <reference types="cypress" />

describe('Inreasing and decreasing quantity of the product', () => {
  beforeEach(() => {
    cy.visit('/');

    
    
  });
  
  it('should add 1 product to the cart', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Copydex')
      .click();

    cy.wait(10000);

    cy.get('h1')
      .should('contain.text', 'Copydex')

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/copydex-copydex-adhesive-bottle-500ml"]')
      .click();

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click()
      });

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Copydex  Copydex Adhesive Bottle 500ml');

    cy.get('.quantity__input')
      .invoke('val').as('initialQuantity')
      .then((initialQuantity) => {
        cy.log('Initial Quantity:', initialQuantity);
    
        // Click the button to increase the quantity
        cy.get('button[name="plus"]').click();
    
        // Get the updated quantity
        cy.get('.quantity__input')
          .invoke('val').as('updatedQuantity')
          .then((updatedQuantity) => {
            cy.log('Updated Quantity:', updatedQuantity);
    
            // Assert that the updated quantity is exactly one greater than the initial quantity
            const parsedInitialQuantity = parseInt(initialQuantity);
            const parsedUpdatedQuantity = parseInt(updatedQuantity);
            expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);

            ///cy.wait(5000);

            cy.get('button[name="minus"]').click();

            // Get the updated quantity after decrease
            cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
              .then((decreasedQuantity) => {
                cy.log('Decreased Quantity:', decreasedQuantity);

                // Assert that the decreased quantity is exactly one less than the initial quantity
                const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
            });
        });
    });
    
  });
});