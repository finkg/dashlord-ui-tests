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
// import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

// addMatchImageSnapshotCommand({
//   failureThreshold: 0.03, // threshold for entire image
//   failureThresholdType: "percent", // percent of image or number of pixels
//   customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
//   capture: "viewport", // capture viewport in screenshot
// });

// const compareSnapshotCommand = require("cypress-image-diff-js/dist/command");
// compareSnapshotCommand();

//Login Staging
// Cypress.Commands.add("login", (email, password) => {
//   email = Cypress.env("qa_email");
//   password = Cypress.env("qa_password");

//   cy.visit("/spaces");
//   cy.get('[name="user"]').type(email);
//   cy.get('[name="password"]').type(password, {
//     log: false,
//   });
//   cy.get('[type="submit"]').click();
// });

//Login Production
Cypress.Commands.add("login", (email, password) => {
  email = Cypress.env("email");
  password = Cypress.env("password");

  cy.visit("/data");
  cy.get('[name="user"]').type(email);
  cy.get('[name="password"]').type(password, {
    log: false,
  });
  cy.get('[type="submit"]').click();
});

// Cypress.Commands.add("api_login", (slug, dashboard) => {
//   const apiUrl =
//     "https://dashlord-api.streetbees.com/v1/clients/streetbees-staging/project/demoboard-v2/login";
//   var token = "";
//   cy.request({
//     method: "POST",
//     url: apiUrl,
//     body: {
//       user: {
//         email: Cypress.env("email"),
//         password: Cypress.env("password"),
//       },
//     },
//   }).then((json) => {
//     token = json.body.data.user.token;
//     return token;
//     console.log();
//   });
// });

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
  selectMarket.get(".Select-option").contains("United Kingdom").click();
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

//Open Compare Sidebar
Cypress.Commands.add("openCompare", () => {
  cy.get(".DashboardHeader__Actions > :nth-child(2)")
    .should("have.text", "Compare")
    .click();
  cy.get(".SidebarWrapper--compare > .SidebarWrapper-header").should(
    "have.text",
    "Compare"
  );
  cy.get(".SidebarWrapper--compare > .SidebarWrapper-header > .btn").should(
    "be.visible"
  );
});

//Open Filters Sidebar
Cypress.Commands.add("openFilters", () => {
  cy.get(".DashboardHeader__Actions > :nth-child(1)")
    .should("have.text", "Filters")
    .click();
  cy.get(".SidebarWrapper--filters > .SidebarWrapper-header").should(
    "have.text",
    "Filters"
  );
  cy.get(".SidebarWrapper--filters > .SidebarWrapper-header > .btn").should(
    "be.visible"
  );
});

//Close Filters Sidebar
Cypress.Commands.add("closeFilters", () => {
  cy.get(".SidebarWrapper--filters .SidebarWrapper-header button").click();
  cy.get(".SidebarWrapper--filters > .SidebarWrapper-header > .btn").should(
    "not.be.visible"
  );
  cy.wait(500);
});

//Close Compare Sidebar
Cypress.Commands.add("closeCompare", () => {
  cy.get(".SidebarWrapper--compare .SidebarWrapper-header button").click();
  cy.get(".SidebarWrapper--compare > .SidebarWrapper-header > .btn").should(
    "not.be.visible"
  );
  cy.wait(500);
});
