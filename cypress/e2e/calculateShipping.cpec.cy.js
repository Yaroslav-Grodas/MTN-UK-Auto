/// <reference types="cypress" />


describe('calculatig shipping', () => {
  beforeEach(() => {
    cy.visit('https://shopmtn.co.uk');
    
    cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();
    
    cy.wait(20000);
    
    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();
  });

  it('should allow user to calculate shipping FIRST PRODUCT', () => {
    
    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Big Wipes')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/big-wipes-triple-pack-of-hand-wipes"]')
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

  it('should allow user to calculate shipping SECOND PRODUCT', () => {
    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Broadfix')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/broadfix-u-shim-mixed-bag-200"]')
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

  it('should allow user to calculate shipping THIRD PRODUCT', () => {
    cy.get('a[href="/pages/shop-our-brands"]')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Beeswift')
      .click();

    cy.wait(10000);

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/breakout-sanitizer-spray-500ml"]')
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

  it('should send error message when the user tries to type invalid postcdoe', () => {
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

  it('should send an error message if the area of shipping is not available', () => {
    cy.visit('https://shopmtn.co.uk/products/big-wipes-half-pallet-counter-video-display-bundle');

    cy.contains('.gr-summary__heading', 'Shipping calculator')
      .click();

    cy.get('#gr_shipping_calculator_country')
      .select('United Kingdom');

    cy.get('#gr_shipping_calculator_zip')
      .type('SY21 1BE');

    cy.get('.gr-shipping-calc__submit')
      .click();

    cy.get('.gr-shipping-title')
      .should('contain.text', 'We do not ship to this destination.');
  });
});