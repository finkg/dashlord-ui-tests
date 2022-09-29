describe("Analytics", () => {
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

  it("Verify Tabs", () => {
    cy.fixture("tab_variables").then(function (tab_variables) {
      this.tab_variables = tab_variables;
    });
    cy.get(".root_level > :nth-child(2) > a").contains("Demand Space").click();
    cy.wait(1000);
  });
});
