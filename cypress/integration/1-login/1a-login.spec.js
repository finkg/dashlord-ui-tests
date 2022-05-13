describe('Dashboard Login Page', () => {
  it('Login (Valid) into Dashboard', () => {

    const email = ('gunnar.finkeldeh@streetbees.com')
    const password = ('8pbgdm!Gtmd2UeY')

    cy.visit('https://insights.streetbees.com/streetbees-staging/demoboard-v2/login')
    cy.get('[class="CookiesPopup"').contains('OK').click()
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
    cy.url().should('contain', '/spaces')
  })
})