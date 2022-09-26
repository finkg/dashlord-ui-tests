// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands";
import "cypress-react-selector";
// import "@percy/cypress";

//Login
Cypress.Commands.add("login", (email, password) => {
  email = Cypress.env("email");
  password = Cypress.env("password");
  // let url = Cypress.config().baseUrl;

  cy.visit("/home");
  cy.get('[name="user"]').type(email);
  cy.get('[name="password"]').type(password, {
    log: false,
  });
  cy.get('[type="submit"]').click();
});

//Logout
Cypress.Commands.add("logout", () => {
  cy.get(".DropdownMenu__NoButton").click();
  cy.get(".DropdownMenu_Content > :nth-child(2)")
    .should("have.text", "Logout")
    .click();
  cy.url().should("contain", "/login");
});

//Select Market
Cypress.Commands.add("marketDropdown", () => {
  const market = cy
    .get(".DropdownFilter")
    .contains(".FilterItem > div:first-child", "Market");

  let selectMarket = market.get(".Select");
  selectMarket.first().click();
  selectMarket.get(".Select-option").contains("United States").click();
  cy.wait(1000);
});

//Select Category
Cypress.Commands.add("categoryDropdown", () => {
  const category = cy
    .get(".DropdownFilter")
    .contains(".FilterItem > div:first-child", "Category");

  let selectCategory = category.get(".Select");
  selectCategory.last().click();
  cy.wait(2000);
  selectCategory.get(".Select-option").contains("Breads").click();
  cy.wait(2000);
});

//Visit Dashboard
// Cypress.Commands.add("visitDashboard", (client, dashboard, route) => {
//     const dlWeb_url = Cypress.env("dashlord_url");
//     const apiBaseUrl = Cypress.env("api_url");
//     const dashboardUrl = endpoints.project(client, dashboard);

//     const apiUrl = apiBaseUrl + "/" + dashboardUrl;
//     //cy.log(apiUrl)
//     let url = `/${client}/${dashboard}`;

//     if (route) {
//       url += "/" + route;
//     }

//     //cy.log(url)
//     cy.server();
//     cy.route(apiUrl).as("dashboard");

//     cy.visit(dlWeb_url + url);
//     cy.wait("@dashboard");

//     //Accept the popup
//     cy.get(".CookiesPopup button").click();
//     cy.wait(1000);
//   });
