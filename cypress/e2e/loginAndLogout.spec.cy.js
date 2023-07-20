/// <reference types="cypress" />

/*describe('login page', () => {
  const user = {
    firstName: 'Vasko',
    lastName: 'DaGama',
    email: 'vasko123!@gmail.com',
    password: 'Vasko123!'
  };

  it('should login and logout user', () => {
    cy.visit('https://shopmtn.co.uk/account/login');

    cy.get('#login')
      .should('exist');

    cy.url()
      .should('include', '/login');

    cy.get('a[href="/account/register"]')
      .should('exist');

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();

    cy.get('#CustomerEmail')
      .type('yaro123!@gmail.com');

    cy.get('#CustomerPassword')
      .type('Yaro123!');

    cy.contains('.gr-btn', 'Sign in')
      .click();

    cy.get('.gr-container')
      .should('contain', 'Yaro')

    cy.get('.gr-container')
      .should('contain', 'Don')

    cy.get('.gr-orders-wrap')
      .should('contain.text', 'Order history');

    cy.get('.gr-addresses-wrap')
      .should('contain.text', 'Account details');
      
    cy.get('a[href="/account/logout"]')
      .should('exist');

    cy.get('a[href="/account/addresses"]')
      .should('exist');

    cy.get('a[href="/account/logout"]')
      .click();

    cy.url()
      .should('include', '/');
  });


  it('should not login user with invalid creds', () => {
    cy.visit('https://shopmtn.co.uk/account/login');

    cy.wait(20000);

    cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();

    cy.get('#CustomerEmail')
      .type('unregister@gmail.com');

    cy.get('#CustomerPassword')
      .type('Yaro123!');

    cy.contains('.gr-btn', 'Sign in')
      .click();

    cy.get('.form__message')
      .should('exist');

    cy.get('.errors')
      .should('contain.text', 'Incorrect email or password.');

    

    cy.get('#CustomerEmail')
      .type('yaro123!@gmail.com');

    cy.get('#CustomerPassword')
      .type('unregiSter');

    cy.contains('.gr-btn', 'Sign in')
      .click();

    cy.get('.form__message')
      .should('exist');

    cy.get('.errors')
      .should('contain.text', 'Incorrect email or password.');

    

    cy.get('#CustomerEmail')
      .type('unregister@gmail.com');

    cy.get('#CustomerPassword')
      .type('Uarolkd2323#');

    cy.contains('.gr-btn', 'Sign in')
      .click();
      
    cy.get('.form__message')
      .should('exist');

    cy.get('.errors')
      .should('contain.text', 'Incorrect email or password.');
  });
});*/