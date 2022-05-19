//Test Case: 
// As a user I want to be able to navigate directly to Dashboard sections using the Tabs
// Expected Results:
// Tabs can be clicked on and open the relevant Section
// After clicking the Tab the section is opened and loaded properly

describe('Dashboard Tabs', () => {
    it('Confirm User is on Spaces Landing Page', () => {
        //Assert
        cy.get('.flex.pb1 > :nth-child(1) > .heading-font')
            .should('have.text', 'Food Demand Spaces')
    });

    it('Click and Validate Categories', () => {
        cy.get('.list-reset > :nth-child(2) > .caps')
            .should('have.text', 'Categories')
            .click()

        cy.get('.selected > a')
            .should('have.text', 'Category')

        cy.get(':nth-child(1) > .caps')
            .should('have.text', 'spaces')
            .click()
    });

    it('Click and Validate Photos', () => {
        cy.get(':nth-child(3) > .caps')
            .should('have.text', 'photos')
            .click()

        cy.get('.selected > a')
            .should('have.text', 'Food')
            .and('be.visible')


        cy.get('.root_level > :nth-child(2) > a')
            .should('have.text', 'Images')
            .and('be.visible')
        cy.wait(1000)

        cy.get('.list-reset > :nth-child(1) > .caps')
            .click()
    });

    it('Click and Validate Analytics', () => {
        cy.get(':nth-child(4) > .caps')
            .should('have.text', 'analytics')
            .click()

        cy.get('.root_level > .selected > a')
            .should('have.text', 'Hot Topics')
            .and('be.visible')

        cy.get('.sub_level > .selected > a')
            .contains('Remote Work')
            .and('be.visible')

        cy.get('.list-reset > :nth-child(1) > .caps')
            .click()
    });
});