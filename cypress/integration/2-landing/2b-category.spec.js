describe('Select a Category', () => {
    it('Select Category, i.e. Breads', () => {
        const dropdown = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Category')

        let select = dropdown.get('.Select')
        select.last().click()
        cy.wait(2000)

        select.get('.Select-option').contains('Breads').click()
        // cy.wait(5000)
    });
});