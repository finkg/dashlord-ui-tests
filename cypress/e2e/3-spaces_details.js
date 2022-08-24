

describe('Go Spaces Details', () => {

    beforeEach('Login', () => {
        cy.session('Save Session', () => {
            cy.login()
            cy.url().should('contain', '/home')
            cy.get('.CookiesPopup > button').contains('OK').click()
            cy.wait(1000)
        })
    })

    // after(() => {
    //     cy.logout()
    // });

    it('Select Market/Category', () => {
        cy.visit('/spaces')
        
        cy.marketDropdown()
        cy.categoryDropdown()



        
    })


})