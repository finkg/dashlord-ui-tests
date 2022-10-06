// Scenario: As a User I want to be navigate from Home Page, using the same filter criteria, through to Spaces Details and Categories Page

describe("Go Spaces Landing", () => {
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
    cy.marketDropdown();
    cy.categoryDropdown();

    cy.get(
      '[style="grid-area: auto / 1 / span 3 / span 4; min-width: 0px;"] > .bg-white > .WidgetContainer'
    ).click();
    // cy.compareSnapshot('growth matrix');
    cy.screenshot();
    // const spaces = cy
    //   .get(".SpacesMarimekko__Table")
    //   .contains(".SpacesMarimekko__Col > :nth-child(0)", "Bonding");

    // let selectSpaces = spaces.get(".DeepLink");
    // selectSpaces
    //   .get(".SpacesMarimekko__Button")
    //   .contains("Family Gatherings")
    //   .click();
  });
});
