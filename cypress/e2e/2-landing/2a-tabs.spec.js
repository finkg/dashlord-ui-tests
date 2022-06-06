//Test Case: 
// As a user I want to be able to navigate directly to Dashboard sections using the Tabs
// Expected Results:
// Tabs can be clicked on and open the relevant Section
// After clicking the Tab the section is opened and loaded properly

describe('Dashboard Tabs', () => {

        cy.login()
        cy.url().should('contain', '/home')
        cy.get('.CookiesPopup > button').contains('OK').click()
        cy.wait(1000)

        it('Confirm User is on Home Page', () => {
            cy.get(':nth-child(1) > .caps')
                .should('contain', 'home')
                .and('be.visible')
            cy.get('.heading-font')
                .should('contain', 'GO Core')
            cy.url().should('contain', '/home')
        });

        it('Click and validate Spaces Landing Page', () => {
            //Assert
            cy.get('.list-reset > :nth-child(2) > .caps').click()
            cy.get('.p3 > :nth-child(1) > :nth-child(1) > .heading-font')
                .should('contain', 'Food Demand Spaces')
            cy.url().should('contain', '/spaces')
        });

    //     it('Click and Validate Categories', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps').click()
    //         cy.get(':nth-child(3) > .caps')
    //             .should('have.text', 'Categories')
    //             .click()
    //         cy.url().should('contain', '/category')

    //         cy.get('.selected > a')
    //             .should('have.text', 'Category')

    //         cy.get(':nth-child(1) > .caps')
    //             .should('have.text', 'home')
    //             .click()
    //     });

    //     it('Click and Validate Photos', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps').click()
    //         cy.get(':nth-child(4) > .caps')
    //             .should('have.text', 'photos')
    //             .click()
    //         cy.url().should('contain', '/images')

    //         cy.get('.selected > a')
    //             .should('have.text', 'Food')
    //             .and('be.visible')


    //         cy.get('.root_level > :nth-child(2) > a')
    //             .should('have.text', 'Images')
    //             .and('be.visible')
    //         cy.wait(1000)

    //     });

    //     it('Click and Validate Analytics', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps').click()
    //         cy.get(':nth-child(5) > .caps')
    //             .should('contain', 'analytics')
    //             .click()
    //         cy.url().should('contain', '/data')

    //         cy.get('.root_level > .selected > a')
    //             .should('have.text', 'Hot Topics')
    //             .and('be.visible')

    //         cy.get('.sub_level > .selected > a')
    //             .contains('Remote Work')
    //             .and('be.visible')

    //     });

    //     it('Click and Validate World', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps')
    //         .click()
    //         cy.get(':nth-child(6) > .caps')
    //         .should('contain', 'world')
    //         .click()
    //         cy.url().should('contain', '/world_view')

    //         cy.get('.MapView__TimeSlider > .h7')
    //             .contains('Time Travelling')

    //     });

    //     it('Click and Validate Moments', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps').click()
    //         cy.get(':nth-child(8) > .caps')
    //             .click()
    //         cy.url().should('contain', '/moments')

    //         cy.get('.btn-toggle-group > .btn')
    //             .should('contain', 'Growth Finder')

    //     });

    //     it('Click and Validate Clusters', () => {
    //         cy.get('.list-reset > :nth-child(1) > .caps').click()
    //         cy.get(':nth-child(9) > .caps')
    //             .click()
    //         cy.url().should('contain', '/clusters')

    //         cy.get('.btn-toggle-group > .btn')
    //             .should('contain', 'Clusters')

    // });

});