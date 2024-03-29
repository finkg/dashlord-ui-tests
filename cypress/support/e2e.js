// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-react-selector";

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Generate a Visual Diff Report
// after(() => {
//   cy.task("generateReport");
// });

//Logout after every Test
// after(() => {
//   cy.logout();
// });

//Use a value/keyword in Test Cases to run specific Test Suites
// beforeEach(function() {
//     let testSuite = Cypress.env('SUITE');
//     if (!testSuite) {
//       return;
//     }

//     const testName = Cypress.mocha.getRunner().test.fullTitle();
//     testSuite = "<"+testSuite+">"
//     if (!testName.includes(testSuite)) {
//       this.skip();
//     }
//   })

// Hide fetch/XHR requests
if (Cypress.config("hideXHR")) {
  const app = window.top;

  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
  }
}

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
