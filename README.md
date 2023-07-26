# MTN-UK-Auto
e2e test for MTN-UK using Cypress


## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run `git clone "link to your cloned repo"`
1. Run the command `npm install -d`.
1. To run test run the command `npx cypress open` => `e2e testing` => `Chrome` => `Choose the spec`

1. To run all tests you need to copy this code and paste it to every spec you want to run. It's the Cypress feature, because Cypress catches the pop-up while running tests localy, but on the GitHub it doesn't. So we need to manualy paste this code to resolve this issue.
`
cy.contains('.needsclick', 'STAY ON SHOPMTN.CO.UK')
      .click();

 cy.wait(20000);

 cy.contains('.needsclick', 'No thanks! I prefer to pay full price.')
      .click();

`
This code needs to be added differently, this is the list of specs where we need to add this code into:
In the beforeEach:
  Adding to the cart
  Calculate shipping
  Filter
  Quantity 
  Policy
  Resources
  Switcher Taxes

In the it():
  Blog
  Home
  Wishlist

In the search spec we don't need to add this code


LOGIN SPEC and CONTACT SPEC are commented for now, because of the CAPTCHA, we can't handle it for now



1. For addind tests create a new branch `git checkout -b testing` or the branch with the name of the feature you want to test, for example `git checkout -b addingToTheCart`.
1. Add modified files to the staging area. (Run `git add .` or `git add "fileName"`)
1. Create a commit (Run `git commit -m "Name of the commit"`)
1. Create a pull request.

