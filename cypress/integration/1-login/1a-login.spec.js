describe('Dashboard Login Page', function () {

  
  it('Login (Valid) into Dashboard', function () {

    cy.visit(this.signInData.url)
    cy.get('[class="CookiesPopup"]').contains('OK').click()
    cy.get('[name="user"]').type(this.signInData.email)
    cy.get('[name="password"]').type(this.signInData.password, {log:false})
    cy.get('[type="submit"]').click()
    cy.url().should('contain', '/home')
  })
})