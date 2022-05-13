describe('Select a Category', () => {
    it('Select Category, i.e. Cereals', () => {
        const dropdown = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Category')

        let select = dropdown.get('.Select')
        select.last().click()
        cy.wait(2000)

        select.get('.Select-option').contains('Cereals').click()
        // cy.wait(5000)
    });
});