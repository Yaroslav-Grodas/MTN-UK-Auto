/// <reference types="cypress" />





describe('Adding to the cart, Checkout, Removing from the cart', () => {
  beforeEach(() => {
    cy.visit('/');

    


  });

  afterEach(() => {
    if (Cypress.runner && Cypress.spec) {
      const currentTest = Cypress.runner.test;
      if (currentTest && currentTest.state === 'failed') {
        const currentSpec = Cypress.spec.name;
        const screenshotFileName = `${currentSpec} -- should proceed to checkout (failed)`;
        cy.screenshot(screenshotFileName);
      }
    }
  });

  it('should check that cart is empty', () => {
  
    cy.get('#cart-icon-bubble')
      .click();

    cy.get('h2')
      .should('contain.text', 'Your cart is empty');

    cy.contains('.gr-btn--outline', 'Continue shopping')
      .should('exist');

  });

  it('should add product to the cart', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    cy.assertPageUrl('/pages/shop-our-brands');
    cy.get('.section-gr-brands-list')
      .should('exist');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', '3M')
      .click();
    cy.assertPageUrl('/collections/3m');
    cy.contains('h1', '3M')
      .should('exist');
    
    cy.contains('a[href="/products/3m-coverall"]','3M Coverall 4530 (Type5/6) - Disposable')
      .click();
    cy.url()
      .should('include', 'products/3m-coverall?variant=');
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

    cy.get('#cart-icon-bubble')
      .click();
    cy.contains('.gr-cart__checkout-btn', 'View cart ')
      .click( {force: true} );
    cy.wait(3000);
    cy.assertPageUrl('/cart');
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

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Altair')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/wbpc200-wireless-intercom-beltpack-charger-4-way"]')
      .click();

    /*cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
          const numericRegex = /[\d.,]+/g;
          const matches = value.match(numericRegex);
          if (matches && matches.length > 0) {
            const savedNumericPart = parseFloat(matches[0].replace(/,/g, '')); // Remove commas from the numeric part
            cy.wrap(savedNumericPart).as('savedTextValue');
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            throw new Error('No numeric value found in savedValue');
          }
    });

    cy.get('.product-form__submit').click({ force: true });
    cy.wait(5000);
    cy.get('a[href="/cart"]').click();

    cy.get('@savedTextValue').then((savedValue) => {
      cy.get('span.price--end-include-tax')
        .invoke('text')
        .then((otherValue) => {
          console.log('Saved Value:', savedValue); // Log the saved value in the console
          console.log('Other Value:', otherValue); // Log the other value in the console

          const numericSavedValue = parseFloat(savedValue);
          const numericOtherValue = parseFloat(otherValue.replace(/[^\d.]/g, '')); // Remove non-numeric characters

          // Define the minimum and maximum values in UAH and USD
          const minConvertedPriceUAH = 340; // Minimum price in UAH
          const maxConvertedPriceUAH = 370; // Maximum price in UAH
          const minConvertedPriceUSD = 6; // Minimum price in USD
          const maxConvertedPriceUSD = 13; // Maximum price in USD

          // Check if the numeric price is within either the UAH range or the USD range
          const isInRange = (numericSavedValue >= minConvertedPriceUAH && numericSavedValue <= maxConvertedPriceUAH) ||
                            (numericSavedValue >= minConvertedPriceUSD && numericSavedValue <= maxConvertedPriceUSD);

          // Check if the other numeric price is within the UAH range or the USD range
          const isOtherInRange = (numericOtherValue >= minConvertedPriceUAH && numericOtherValue <= maxConvertedPriceUAH) ||
                                 (numericOtherValue >= minConvertedPriceUSD && numericOtherValue <= maxConvertedPriceUSD);

          if (!isInRange || !isOtherInRange) {
            throw new Error('Price does not fall within the expected range.');
          }
        });
    });*/


    /* I'm going to store the previous part of the code here if the shopify will be back to show the prices in the pounds again.
    */

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
        cy.contains('.gr-cart__checkout-btn', 'View cart ')
          .click( {force: true} ).then(() => {
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

    cy.contains('Altair 5109 WBPC200 Wireless Intercom Beltpack Charger - 4 Way')
      .should('be.visible');


  });

  it('should remove prooduct from the cart', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Komelon')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/komelon-komelon-starter-stock-deal-pack"]')
      .click();

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait(5000);
        cy.contains('.gr-cart__checkout-btn', 'View cart ')
          .click( {force: true} )
      });

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Komelon  Komelon Starter Stock Deal Pack');

    cy.get('button[name="minus"]').last().click( {force: true} ); 

    cy.wait(4000);

    cy.get('.gr-cart-item__link')
      .should('not.exist');

    cy.contains('h1', 'Your cart is empty')
      .should('exist');

    cy.contains('.gr-link', 'Continue shopping')
      .should('exist');

  });

  
});