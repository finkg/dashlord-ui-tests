describe("Analytics", function () {
    beforeEach("Login", () => {
      cy.session("Save Session", () => {
        cy.login();
        cy.url().should("contain", "/home");
        cy.get(".CookiesPopup > button").contains("OK").click();
        cy.wait(1000);
      });
    });
  
    beforeEach("Go to Data Page", () => {
      cy.visit("/data");
    });
  
    // after(() => {
    //     cy.logout()
    // });
  
    context("A. Column", () => {
      it("Validate Widgets", () => {

        cy.visit("https://insights.streetbees.com/streetbees-staging/demoboard-v2/data/a-column/aa-no-weights")
        cy.get(".root_level > :nth-child(5) > a").should("contain", "A. Column").click()
        cy.get(".sub_level > :nth-child(1) > a").should("contain", "AA. No Weights")
        });
      });

  })
