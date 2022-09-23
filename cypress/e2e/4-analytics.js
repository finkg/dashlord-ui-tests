describe("Analytics", () => {
  beforeEach("Login", () => {
    cy.session("Save Session", () => {
      cy.login();
      cy.url().should("contain", "/home");
      cy.get(".CookiesPopup > button").contains("OK").click();
      cy.wait(1000);
    });
  });

  // after(() => {
  //     cy.logout()
  // });
  it("Open Analytics Page", () => {
    cy.visit("/data");
  });
  cy.percySnapshot();
});
