/// <reference types="cypress" />

describe('checking prices switcher with taxes and without', () => {

  beforeEach(() => {
    cy.visit('/');

    

    
  });

  it('should check if the prices are changed after the product was added to the cart FIRST PRODUCT', () => {
    cy.get('#Search-In-Modal')
      .type('Safety Gloves');

    cy.wait(5000);

    cy.get('.gr-link')
      .contains('Dirty Rigger Gloves - Comfort Fit™ (General Use)')
      .click();

    cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'Dirty Rigger Gloves - Comfort Fit™ (General Use)')

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

    cy.get('#Search-In-Modal')
      .type('Safety Harnesses');

    cy.wait(5000);

    cy.get('.gr-link')
      .contains('FA2 Fall Protection Kit')
      .click( {force: true} );

    cy.wait(5000);

    cy.get('h1')
      .should('contain.text', 'FA2 Fall Protection Kit');

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

    cy.get('#Search-In-Modal')
      .type('Fall Arresters');

    cy.wait(5000);

    cy.get('.gr-link')
      .contains('Checkmate ATOM-X: Dual Mini Fall Arrest Block')
      .click({ force: true });

    cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'Checkmate ATOM-X: Dual Mini Fall Arrest Block')

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