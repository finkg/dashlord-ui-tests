// dash.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Dashboard Login Page', () => {
    it('Login (Valid) into Dashboard', () => {

      const name = ('gunnar.finkeldeh@streetbees.com')
      const password = ('8pbgdm!Gtmd2UeY')

      cy.visit('https://insights.streetbees.com/streetbees-staging/demoboard-v2/login')
          cy.get('[class="CookiesPopup"').contains('OK').click()
          cy.get('[name="user"]').type(name)   
          cy.get('[name="password"]').type(password)    
          cy.get('[type="submit"]').click()
      })
    })
