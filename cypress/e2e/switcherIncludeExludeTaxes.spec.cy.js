/// <reference types="cypress" />

describe('checking prices switcher with taxes and without', () => {

  beforeEach(() => {
    cy.visit('/');

    

    
  });

  it('should check if the prices are changed after the product was added to the cart FIRST PRODUCT', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Expert')
      .click();

    cy.wait(10000);

    cy.get('h1')
      .should('contain.text', 'Expert')

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/expert-1-4in-drive-socket-accessory-set-73-piece"]')
      .click();

    cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'Expert 1/4in Drive Socket & Accessory Set, 73 Piece')

    let savedNumericPart; // Define the variable in a higher scope

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  });

  it('should check if the prices are changed after the product was added to the cart SECOND PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Dormer')
      .click();

    cy.wait(10000);

    cy.get('h1')
      .should('contain.text', 'Dormer')

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/dormer-solid-carbide-rotary-burr-cylindrical-set-5-piece"]')
      .click();

    cy.wait(5000);

    cy.get('h1')
      .should('contain.text', 'Dormer Solid Carbide Rotary Burr Cylindrical Set 5 Piece');

    let savedNumericPart;

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  });

  it('should check if the prices are changed after the product was added to the cart THIRD PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Yale')
      .click();

    cy.wait(10000);

    cy.get('h1')
      .should('contain.text', 'Yale')

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/pfaff-hand-pallet-truck-3-5ton"]')
      .click();

    cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'Pfaff Hand Pallet Truck Proline 3000-5000 KG')

    let savedNumericPart;

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  });

});