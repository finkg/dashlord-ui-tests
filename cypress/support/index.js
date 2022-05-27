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
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

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

beforeEach(function() {
	cy.fixture('login').then(function(signInData) 
	{this.signInData = signInData})  
  });


//Code to Handle the Sesssions in cypress.
//Keep the Session alive when you jump to another test
// afterEach(() => {
// 	let str = [];
// 	cy.getCookies().then((cook) => {
// 		cy.log(cook);
// 		for (let l = 0; l < cook.length; l++) {
// 			if (cook.length > 0 && l == 0) {
// 				str[l] = cook[l].name;
// 				Cypress.Cookies.preserveOnce(str[l]);
// 			} else if (cook.length > 1 && l > 1) {
// 				str[l] = cook[l].name;
// 				Cypress.Cookies.preserveOnce(str[l]);
// 			}
// 		}
// 	})
// })

// Hide fetch/XHR requests
if (Cypress.config('hideXHR')) {

	const app = window.top;

	if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
		const style = app.document.createElement('style');
		style.innerHTML =
			'.command-name-request, .command-name-xhr { display: none }';
		style.setAttribute('data-hide-command-log-request', '');

		app.document.head.appendChild(style);
	}
}