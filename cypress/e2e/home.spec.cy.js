/// <reference types="cypress" />


describe('home hape', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('Redirect to the home page and have all main elements', () => {
    

    

    

    cy.get('.gr-announcement-bar')
      .should('contain','Looking for a Quote? Click here to make a request 📝');
    
    cy.get('.gr-search-form')
      .should('exist');

    cy.get('.gr-logo')
      .click();
    cy.assertPageUrl('/');

    cy.get('.gr-inc-switcher')
      .should('contain.text', 'incl. VAT');
    cy.get('.gr-inc-switcher')
      .should('contain.text', 'excl. VAT');

    cy.get('.gr-header-menu')
      .contains('a', 'Workwear')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'PPE & Height Safety')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'Tools')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'Industrial')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'Entertainment')
      .should('exist')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'Brands')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'Special Offers')
      .should('exist');
    cy.get('.gr-header-menu')
      .contains('a', 'MTN Rewards')
      .should('exist');
      

    cy.get('.gr-slider-wrapper')
      .should('exist');

    cy.get('h2')
      .should('contain.text', 'Top Categories');
    
    cy.get('.icon-caret')
      .should('exist');
     
    cy.get('.section-gr-brands-slider')
      .should('contain.text', 'Our Brands');

    cy.get('h2')
      .should('contain.text', 'Who We Are');

    cy.get('.gr-btn')
      .should('contain.text', 'Gear Up');

    cy.get('.gr-header-btn--account')
      .should('contain.text', 'Log in');

    cy.get('#cart-icon-bubble')
      .should('contain.text', 'Cart')

    cy.get('.gr-footer__navigation')
      .contains('a', 'OUR STORY')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'REQUEST FOR QUOTE')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'RESOURCES')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'CONTACT')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'BLOG')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'FEEDBACK')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'TERMS OF SERVICE')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'REFUND POLICY')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'PRIVACY POLICY')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'ACCOUNT SIGN IN')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'MTN REWARDS')
      .should('exist');
    cy.get('.gr-footer__navigation')
      .contains('a', 'PROMOTION POLICY')
      .should('exist');
    cy.get('.gr-with-icon')
      .contains('a', 'Contact Us')
      .should('exist');
    cy.get('.gr-btn')
      .contains('a', 'Request A Quote')
      .should('exist');
    cy.get('.gr-footer__actions')
      .contains('Click Here to Sign Up')
      .should('exist');

    
    cy.get('.icon-facebook')
      .should('exist');
    cy.get('.icon-instagram')
      .should('exist');
    cy.get('.icon-xcorp')
      .should('exist');
    cy.get('.icon-youtube')
      .should('exist');
    cy.get('.icon-linkedin')
      .should('exist');
    cy.get('.icon-mail--s')
      .should('exist');

    cy.get('a[href="https://www.facebook.com/mtnshopuk"]')
      .should('exist');
    cy.get('a[href="https://www.instagram.com/mtnshopuk/"]')
      .should('exist');
    cy.get('a[href="https://twitter.com/mtnshopuk"]')
      .should('exist');
    cy.get('a[href="https://www.youtube.com/channel/UCgO36nA9fDa5kUotQLqvfrw"]')
      .should('exist');
    cy.get('a[href="https://www.linkedin.com/company/mtn-shop-uk"]')
      .should('exist');
    cy.get('a[href="mailto:info@shopmtn.co.uk"]')
      .should('exist');

  });

 
}); 

/*it.skip('broken links', () => {
    cy.visit('https://shopmtn.co.uk/')

    cy.get('a').each(link => {

      if (link.prop('href'))

        cy.request({

          url: link.prop('href'),

          failOnStatusCode: false

        })

      cy.log( link.prop('href'))

    })
  })*/