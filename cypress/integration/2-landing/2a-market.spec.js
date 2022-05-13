//Test Case: 
// Testing the functionality of being able to select a Market and seeing the Landing Page change according to the Market Share
// Expected Results:
// 1. Marimekko changes
// 2. Growth Matrix changes
// 3. Spaces Comparison changes

//
// Selects a specific Market
//

describe('Selects a specific Market', () => {
  it('Select Market, i.e UK', () => {
    const dropdown = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')

    let select = dropdown.get('.Select')

    select.first().click()

    select.get('.Select-option').contains('United Kingdom').click()
    cy.wait(1000)
    cy.get('[style="height: 171.875px;"] > .SpacesMarimekko__Button').click()
    cy.wait(5000)
    cy.get('.BackButton').click()
  });
});


//
// Switches between different Markets
//

// describe('Switch between Markets', () => {
//   it('Select Market from Dropdown', () => {
//     const dropdown = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')

//     let select = dropdown.get('.Select')

//     select.first().click()

//     select.get('.Select-option').each((element, index) => {
//       select.get('.Select-option').eq(index)
//       cy.wait(1000)
//       cy.wrap(element).click()
//       cy.wait(1000)
//       cy.get('[style="height: 171.875px;"] > .SpacesMarimekko__Button').click()
//       cy.wait(5000)
//       cy.get('.BackButton').click()
//     })
//   })
// })