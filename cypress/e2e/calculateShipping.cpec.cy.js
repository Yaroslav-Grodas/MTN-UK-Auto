/// <reference types="cypress" />


describe('calculatig shipping', () => {
  beforeEach(() => {
    cy.visit('/');


    


      
  });

  it.skip('should allow user to calculate shipping FIRST PRODUCT', () => {
    
    cy.contains('a[href="/pages/shop-our-brands"]', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Bondloc')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/bondloc-b243-nutlock-medium-strength-threadlocker-50ml"]')
      .click();

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('B12 0AB');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');


  });

  it.skip('should allow user to calculate shipping SECOND PRODUCT', () => {
    cy.contains('a[href="/pages/shop-our-brands"]', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Camlok')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/camlok-screw-clamp-tsh"]')
      .click();

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('DD2 5BB');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');
  });

  it.skip('should allow user to calculate shipping THIRD PRODUCT', () => {
    cy.contains('a[href="/pages/shop-our-brands"]', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Bostik')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/bostik-fast-tak-permanent-adhesive-spray-500ml"]')
      .click();

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('BT10 9BE');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-calc__response')
      .should('exist');
  });

  it.skip('should send error message when the user tries to type invalid postcdoe', () => {
    cy.visit('https://shopmtn.co.uk/products/breakout-sanitizer-spray-500ml?variant=37892720591036');

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('jfkd38393');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-error')
      .should('contain.text', 'Enter a valid postcode for the United Kingdom');
  });

  it.skip('should send an error message if the area of shipping is not available', () => {
    cy.visit('https://shopmtn.co.uk/products/pfaff-electric-pedestrian-stacker');

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('B1 1AY');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-title')
      .should('contain.text', 'We do not ship to this destination.');
  });
});