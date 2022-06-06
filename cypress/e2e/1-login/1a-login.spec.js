describe('Dashboard Login Page', () => {
  
  it('Login (Valid) into Dashboard', () => {
    // cy.clearCookies()
    cy.login()
    cy.url().should('contain', '/home')
    cy.get('.CookiesPopup > button').contains('OK').click()
    cy.wait(1000)

  })

})