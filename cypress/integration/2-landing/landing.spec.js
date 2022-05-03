// landing.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Select Market', () => {
    it('Select Market from Dropdown', () => {
      const select = cy.get('.Select').contains("Market")
      select.click()
      select.get('.Select-option').each((element, index) => {
        select.get('.Select-option').eq(index)
      //   select.click()
      cy.wait(1000)
      cy.wrap(element).click()
      cy.wait(1000)
      select.click()
      cy.log()
            })
        

    })
})
  