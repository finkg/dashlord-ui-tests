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
    cy.fixture("tabs").then((tabs) => {
      const header = tabs.header;

      // cy.get(".root_level > :nth-child(1) > a").should(header).click()

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
  });
});
