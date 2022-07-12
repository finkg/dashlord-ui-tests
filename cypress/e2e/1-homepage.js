//Scenario: As a User I want to log into the Dashboard and view the Go Core Home Page

describe('Go Home Page', () => {

    beforeEach('Login', () => {
        cy.session('Save Session', () => {
            cy.login()
            cy.url().should('contain', '/home')
            cy.get('.CookiesPopup > button').contains('OK').click()
            cy.wait(1000)
        })
    })

    after(() => {
        cy.logout()
    });

    it('Home Page Validation', () => {
        cy.visit('/go')
        cy.get('.list-reset > :nth-child(2) > .caps').contains("home").click()

        //Select Market Filter and choose Country
        const market = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')

        let selectMarket = market.get('.Select')
        selectMarket.click()
        selectMarket.get('.Select-option').contains('China').click()
        cy.wait(1000)

        cy.get('.categories__info > .allcaps').should('have.text', "Remote Work & commuting")
        cy.get('.h3').should('have.text', "All Demand Spaces")
    });

    it('Select & View Hot Topics: Remote Working', () => {
        cy.visit('/go')

        //Click View Data Button
        cy.get('.pb2 > .view-data-btn').should('has.text', "View data").click()
        cy.url().should('contain', '/data/hot-topics/remote-work-commuting')
        cy.get('.sub_level > .selected > a').should('has.text', "Remote Work & Commuting")
        cy.wait(1000)
        cy.get('.BackButton').should('contain', "back to").should('be.visible')
        cy.get('.BackButton').should('contain', "home").should('be.visible').click()

        //Click Category Wrapper Button



        // cy.get('.FilterItem').contains("Activities & socialising").click()

 
    });



})