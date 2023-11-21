/// <reference types="cypress" />

describe('adding and removing product in the wishlist', () => {

  it('should add product to the wishlist and remove it', () => {
    cy.visit('/');

    

    

    



    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    cy.assertPageUrl('/pages/shop-our-brands');
    cy.get('.section-gr-brands-list')
      .should('exist');

    cy.wait(5000);

    cy.contains('.gr-brands-list__item', 'Admiral Staging')
      .click();
    cy.assertPageUrl('/collections/admiral-staging');
    cy.contains('h1', 'Admiral Staging')
      .should('exist');

    cy.contains('a[href="/products/admiral-staging-vintage-luminaire-60w-mkii-38cm-powercon-true-1-type-plug-aradred47"]', 'Admiral Staging')
      .click();
    cy.assertPageUrl('/products/admiral-staging-vintage-luminaire-60w-mkii-38cm-powercon-true-1-type-plug-aradred47?variant=43118201503956');
    cy.get('h1')
      .should('contain.text', 'Admiral Staging Vintage Luminaire 60W MKII 38cm/53cm  + PowerCon True 1 Type Plug ARADRED47');

    cy.get('.Vtl-WishlistButton__AddToWishlistText')
      .should('contain.text', 'Add to Wishlist');

    cy.get('.Vtl-WishlistButton__GoToWishlistText')
      .should('contain.text', 'My Wishlist');

    cy.get('[href="/a/page/wishlist"]')
      .click();

    cy.get('.Vtl-WishlistPage__EmptyList')
      .should('contain.text', 'Your Wishlist is empty.');

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.contains('.gr-brands-list__item', 'Admiral Staging')
      .click();

    cy.contains('a[href="/products/admiral-staging-vintage-luminaire-60w-mkii-38cm-powercon-true-1-type-plug-aradred47"]', 'Admiral Staging')
      .click();

    cy.wait(5000);

    cy.get('.Vtl-WishlistButton__AddToWishlist')
      .click();
    cy.get('.Vtl-WishlistButton__Counter')
      .should('exist');

    cy.get('[href="/a/page/wishlist"]')
      .click();

    cy.assertPageUrl('/a/page/wishlist');

    cy.contains('.Vtl-WishlistPage__Title', 'Wishlist')
      .should('exist');

    cy.contains('.Vtl-WishlistPage__Description', 'Save your favorite products for later')
      .should('exist');

    cy.get('.Vtl-WishlistProduct__Image')
      .should('exist');

    cy.get('.Vtl-WishlistProduct__Title')
      .should('contain', 'Admiral Staging Vintage Luminaire 60W MKII 38cm/53cm  + PowerCon True 1 Type Plug ARADRED47');

    cy.contains('.Vtl-WishlistProduct__AddToCartText', 'Add to cart')
      .should('exist');

    cy.get('.Vtl-CloseButton', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('.Vtl-WishlistPage__EmptyList', 'Your Wishlist is empty.')
      .should('exist');

    cy.get('.Vtl-WishlistProduct__Title')
      .should('not.exist');

  });
});