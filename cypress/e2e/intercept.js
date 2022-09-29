describe("Go Spaces Details", () => {
  beforeEach("Login", () => {
    cy.session("Save Session", () => {
      cy.login();
      // cy.visit("/home");
      cy.url().should("contain", "/home");
      cy.get(".CookiesPopup > button").contains("OK").click();
      cy.wait(1000);
    });
  });

  it("Get Demoboard Json", () => {
    cy.visit("/data");
  });
});
