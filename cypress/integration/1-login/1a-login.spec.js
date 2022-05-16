describe('Dashboard Login Page', () => {
  it('Login (Valid) into Dashboard', () => {

    cy.clearCookies()
    const email = Cypress.env('email')
    const password = Cypress.env('password')

    let url = Cypress.config().baseUrl;
    cy.visit(url)
    cy.get('[class="CookiesPopup"').contains('OK').click()
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
    cy.url().should('contain', '/spaces')
  })
})