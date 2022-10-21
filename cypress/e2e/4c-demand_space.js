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

  context("A. Column", () => {
    it("Validate Widgets", () => {
      cy.get(".root_level > :nth-child(2) > a")
        .should("contain", "Demand Space")
        .click();
      cy.get(".sub_level > :nth-child(1) > a").should("contain", "Overview");

    });
  });
});
