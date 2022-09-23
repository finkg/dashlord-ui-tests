//Scenario: As a User I want to log into the Dashboard and view the Go Core Home Page

describe("Go Home Page", () => {
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

  it("Home Page Validation", () => {
    cy.visit("/go");
    cy.get(".list-reset > :nth-child(2) > .caps").contains("home").click();

    //Select Market Filter and choose Country
    cy.marketDropdown();

    cy.get(".categories__info > .allcaps").should(
      "have.text",
      "Remote Work & commuting"
    );
    cy.get(".h3").should("have.text", "All Demand Spaces");
  });

  it("Select & View Hot Topics: Remote Working", () => {
    cy.visit("/go");

    //Click View Data Button
    cy.get(".pb2 > .view-data-btn").should("has.text", "View data").click();
    cy.url().should("contain", "/data/hot-topics/remote-work-commuting");
    cy.get(".sub_level > .selected > a").should(
      "has.text",
      "Remote Work & Commuting"
    );
    cy.wait(1000);

    //User click on "Back to Home" button
    cy.get(".BackButton").should("contain", "back to").should("be.visible");
    cy.get(".BackButton")
      .should("contain", "home")
      .should("be.visible")
      .click();
    cy.url().should("contain", "/go");

    //Click Category Wrapper Button
  });

  it("Select & View Demand Space: Family Gatherings", () => {
    cy.visit("/go");
    cy.marketDropdown();

    //Click on a Demand Space on the Slider: Family Gatherings
    cy.get('[data-index="2"] > :nth-child(1) > .slide > .cover_bg').click();
    cy.get(
      ".slick-current > :nth-child(1) > .slide > .cover_bg > .slide-inner-title"
    ).should("have.text", "Family Gatherings");
    cy.get(".headline-section > .heading-font").should(
      "have.text",
      "Family Gatherings"
    );
    cy.percySnapshot();

    //Click on View this Space Button
    cy.get(".headline-section > .btn")
      .should("contain", "VIEW THIS SPACE")
      .click();
    cy.url().should("contain", "/spaces");

    //Confirm user is taken to correct Spaces Details Page
    cy.get(".OverviewWidget-text > .h1").should(
      "have.text",
      "Family Gatherings"
    );
    cy.wait(1000);
    cy.percySnapshot();

    //User clicks on "Back to Home" button
    cy.get(".BackButton").should("contain", "back to").should("be.visible");
    cy.get(".BackButton")
      .should("contain", "home")
      .should("be.visible")
      .click();
    cy.url().should("contain", "/go");
    cy.percySnapshot();
  });
});
