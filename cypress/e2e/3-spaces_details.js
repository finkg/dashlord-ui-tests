describe("Go Spaces Details", () => {
  beforeEach("Login", () => {
    cy.session("Save Session", () => {
      cy.login();
      cy.url().should("contain", "/home");
      cy.get(".CookiesPopup > button").contains("OK").click();
      cy.wait(1000);
    });
  });

  beforeEach("Go to Spaces Page", () => {
    cy.visit("/spaces");
  });

  it("Select Market/Category", () => {
    cy.visit("/spaces");

    cy.marketDropdown();
    cy.categoryDropdown();
  });
});
