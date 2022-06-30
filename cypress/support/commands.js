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

import "cypress-localstorage-commands"

//Login 
Cypress.Commands.add('login', (email, password) => {
    email = Cypress.env('email')
    password = Cypress.env('password')
    // let url = Cypress.config().baseUrl;
    
    cy.visit('/')
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(password, {
        log: false
    })
    cy.get('[type="submit"]').click()
})


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