// //Test Case: 
// // Testing the functionality of being able to select a Market and seeing the Landing Page change according to the Market Share
// // Expected Results:
// // 1. Marimekko changes
// // 2. Growth Matrix changes
// // 3. Spaces Comparison changes

// describe('Market/Category Combinations', () => {

//   it('No Market / No Category (Default)', () => {

//   });


//   it('Select Market / No Category', () => {

//     const market = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')

//     let select = market.get('.Select')
//     select.first().click()
//     select.get('.Select-option').contains('United States').click()
//     cy.wait(1000)
//     cy.get('.Select-clear').click()

//   });

//   it('No Market / Select Category', () => {

//     const category = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Category')

//     let select = category.get('.Select')
//     select.last().click()
//     cy.wait(2000)
//     select.get('.Select-option').contains('Breads').click()
//     cy.wait(2000)

//     cy.get('.Select-clear').click()
//   });

//   it('Select Market / Select Category', () => {

//     const market = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')
//     const category = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Category')

//     let mar = market.get('.Select')
//     mar.first().click()
//     mar.get('.Select-option').contains('United Kingdom').click()
//     cy.wait(1000)

//     let cat = category.get('.Select')
//     cat.last().click()
//     cy.wait(2000)
//     cat.get('.Select-option').contains('Breads').click()
//     cy.wait(2000)

//   });




// });





























// // Switches between different Markets

// // describe('Switch between Markets', () => {
// //   it('Select Market from Dropdown', () => {
// //     const dropdown = cy.get('.DropdownFilter').contains('.FilterItem > div:first-child', 'Market')

// //     let select = dropdown.get('.Select')

// //     select.first().click()

// //     select.get('.Select-option').each((element, index) => {
// //       select.get('.Select-option').eq(index)
// //       cy.wait(1000)
// //       cy.wrap(element).click()
// //       cy.wait(1000)
// //       cy.get('[style="height: 171.875px;"] > .SpacesMarimekko__Button').click()
// //       cy.wait(5000)
// //       cy.get('.BackButton').click()
// //     })
// //   })
// // })