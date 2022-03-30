// dash.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Dashboard Login Page', () => {
    it('Opens the Dashboard Login Page', () => {
      cy.visit('https://insights.streetbees.com/streetbees-staging/demoboard-v2/login')
      cy.contains('OK').click()

      cy.get('[name="user"]')
      .type('gunnar.finkeldeh@streetbees.com')
      .should('value', 'gunnar.finkeldeh@streetbees.com')
      
      cy.get('[name="password"]')
      .type('8pbgdm!Gtmd2UeY')
      .should('value', '8pbgdm!Gtmd2UeY')
      .type('{enter}')

      cy.url().should('include', 'demoboard-v2/spaces')
    })
  })
