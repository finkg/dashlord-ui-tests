// Scenario: As a User I want to be navigate from Home Page, using the same filter criteria, through to Spaces Details and Categories Page 

describe('Go Navigation Journey', () => {

    beforeEach('Login', () => {
        cy.session('Session', () => {
            cy.login()
            cy.url().should('contain', '/home')
            cy.get('.CookiesPopup > button').contains('OK').click()
            cy.wait(1000)
        })
    })

    it('Select Market/Category', () => {
        cy.visit('/spaces')
        cy.get(':nth-child(3) > .caps').click()

        const market = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')
        const category = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Category')

        let selectMarket = market.get('.Select')
        selectMarket.first().click()
        selectMarket.get('.Select-option').contains('United States').click()
        cy.wait(1000)

        let selectCategory = category.get('.Select')
        selectCategory.last().click()
        cy.wait(2000)
        selectCategory.get('.Select-option').contains('Breads').click()
        cy.wait(2000)
    })


})