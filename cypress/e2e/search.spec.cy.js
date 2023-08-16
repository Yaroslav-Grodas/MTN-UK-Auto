/// <reference types="cypress" />

describe('search field', () => {
  const product = {
    nameFirst: 'Faithfull Kneeler Board Soft Insert',
    nameSecond: 'Altair 54135 Spare Antenna for WBS200 Wireless Base Station',
    name: 'Dunlop Safety Boots - Protomaster Chemical Resistant',
    nameThird: 'LEDLENSER Headlamp iH6R',
    nameFourth: 'Checkmate Worm Gear Winch',
    nameFifth: 'MTN Chain Slider Inserts',
    nameSixth: 'Stanley Bailey G-Clamp 75mm (3in)',
    nameSeventh: 'Arbortec Ascent Pro Climbing Boot',
    nameEighth: 'Evolution '
  };

  const part = {
    partFirst: 'faithfull-kneeler-board-soft-insert',
    partSecond: 'altair-54135-spare-antenna-for-wbs200-wireless-base-station',
    partFourth: 'checkmate-worm-gear-winch',
    partFifth: 'mtn-chain-slider-inserts'
  };
  
  it('should allow user to search different products', () => {
    cy.visit('/');

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();

    cy.get('#Search-In-Modal')
      .type(product.nameFirst);

    cy.get('[data-js="productTitle"]')
      .should('contain', product.nameFirst)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFirst)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFirst);

    cy.get('.gr-logo-wrapper')
      .click();


    cy.get('#Search-In-Modal')
      .type(product.nameSecond);

    cy.wait(2000);
    cy.get(`a[href="/products/${part.partSecond}"], .gr-link`)
      .contains(product.nameSecond)
      .click();
      
    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSecond)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSecond);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameThird);

    cy.get('.gr-link')
      .contains(product.nameThird)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameThird)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameThird);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFourth);

    cy.get(`a[data-js="productTitle"][href="/products/${part.partFourth}"]`)
      .should('contain', product.nameFourth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFourth).should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFourth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFifth);

    cy.get(`a[data-js="productTitle"][href="/products/${part.partFifth}"]`)
      .should('contain', product.nameFifth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFifth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFifth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSixth);

    cy.get('.gr-link')
      .contains(product.nameSixth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSixth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSixth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSeventh);

    cy.get('.gr-link')
      .contains(product.nameSeventh)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSeventh)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSeventh);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameEighth);

    cy.get('.gr-search-results')
      .should('contain', product.nameEighth)
    

    /*cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameEighth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameEighth);

    cy.get('.gr-logo-wrapper')
      .click();*/
  });
});