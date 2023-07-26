/// <reference types="cypress" />



describe('Adding to the cart, Checkout, Removing from the cart', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');

    


    
  });

  it('should check that cart is empty', () => {
  
    cy.get('a[href="/cart"]')
      .click();

    cy.get('h1')
      .should('contain.text', 'Your cart is empty');

    cy.contains('.gr-link', 'Continue shopping')
      .should('exist');

  });

  it('should add product to the cart', () => {

    cy.get('a[href="/pages/shop-our-brands"]')
      .click();
    cy.url()
      .should('include','/shop-our-brands');
    cy.get('.section-gr-brands-list')
      .should('exist');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', '3M')
      .click();
    cy.url()
      .should('include','/collections/3m');
    cy.contains('h1', '3M')
      .should('exist');
    
    cy.contains('a[href="/products/3m-coverall"]','3M Coverall 4530 (Type5/6) - Disposable')
      .click();
    cy.url()
      .should('include','/products/3m-coverall');
    cy.get('h1')
      .should('contain.text', '3M Coverall 4530 (Type5/6) - Disposable');
    cy.get('.gr-product-media')
      .should('exist');
    cy.get('.gr-price__container')
      .should('exist');
    cy.get('#shopify-block-judgeme_preview_badge_product_page_08c13569')
      .should('exist');
    cy.contains('.gr-details', 'Product details')
      .should('exist')

    cy.get('.product-form__submit')
      .click();

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.get('a[href="/cart"]')
      .click();
    cy.url()
      .should('include', '/cart');
    cy.contains('h1', 'Your cart')
      .should('exist');
    cy.contains('#checkout', 'Check out')
      .should('exist');
    cy.get('.shopify-section')
      .contains('3M Coverall 4530 (Type5/6) - Disposable');
    cy.contains('.gr-link', 'Continue shopping')
      .should('exist');
    cy.get('.cart__dynamic-checkout-buttons')
      .should('exist');
    cy.get('.gr-cart-footer-subtotal-wrap')
      .should('exist');

  });

  it('should proceed to checkout', () => {

    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Araldite')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/araldite®-repair-epoxy-bar-50g"]')
      .click();

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
        if (matches && matches[1]) {
            const savedNumericPart = matches[1];
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
        } else {
            console.error('No numeric value found in savedValue');
        }
    });

    cy.get('.product-form__submit').click().then(() => {
      cy.wait(5000);
      cy.get('a[href="/cart"]').click().then(() => {
        cy.get('@savedTextValue').then((savedValue) => {
          cy.get('span.price--end-include-tax')
            .invoke('text')
            .then((otherValue) => {
              console.log('Saved Value:', savedValue); // Log the saved value in the console
              console.log('Other Value:', otherValue); // Log the other value in the console
    
              const numericSavedValue = parseFloat(savedValue.replace(/[^\d.]/g, ''));
              const numericOtherValue = parseFloat(otherValue.replace(/[^\d.]/g, ''));
    
              // Perform the currency conversion or obtain the correct exchange rate for UAH to pounds
              const exchangeRate = 48.7; // Example conversion rate (1 UAH = 0.02 GBP)
    
              // Convert the price from UAH to pounds
              const convertedOtherValue = numericOtherValue / exchangeRate;
    
              // Compare the converted price with a tolerance (e.g., 0.01) to account for rounding differences
              expect(convertedOtherValue).to.be.closeTo(numericSavedValue, 0.01, 'Prices are not the same in both pages');
            });
        });
      });
    });

    /* I'm going to store the previous part of the code here if the shopify will be back to show the prices in the pounds again.
    This code is from the beginning of the it()
    
    it('should proceed to checkout', () => {

    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Araldite')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/araldite®-repair-epoxy-bar-50g"]')
      .click();

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
        if (matches && matches[1]) {
            const savedNumericPart = matches[1];
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
        } else {
            console.error('No numeric value found in savedValue');
        }
    });

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click().then(() => {
          cy.get('@savedTextValue').then((savedValue) => {
            cy.get('span.price--end-include-tax')
              .invoke('text')
              .then((otherValue) => {
                console.log('Saved Value:', savedValue); // Log the saved value in the console
                console.log('Other Value:', otherValue); // Log the other value in the console
                expect(otherValue).to.include(savedValue, 'Saved numeric value is included in the other value');
              });
            });
        });
    });
    */
   
    cy.get('#checkout')
      .click();

    cy.url()
      .should('include', '/checkouts');

    cy.contains('div', 'Express checkout')
      .should('exist');

    cy.contains('div', 'Contact')
      .should('exist');

    cy.contains('div', 'Shipping address')
      .should('exist');

    cy.contains('[type="submit"]', 'Continue to shipping')
      .should('exist');

    cy.contains('Araldite® Repair Epoxy Bar 50g')
      .should('be.visible');

  });

  it('should remove prooduct from the cart', () => {
    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Starret')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/starrett-a014c-high-speed-steel-pilot-drill"]')
      .click();

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get('a[href="/cart"]').click()
      });

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Starrett A014C High-Speed Steel Pilot Drill');

    cy.get('.gr-cart-item__del-btn')
      .click();

    cy.get('.gr-cart-item__link')
      .should('not.exist');

    cy.contains('h1', 'Your cart is empty')
      .should('exist');

    cy.contains('.gr-link', 'Continue shopping')
      .should('exist');

  });
});