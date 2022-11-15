describe("Analytics", function () {
  beforeEach("Login", () => {
    cy.session("Save Session", () => {
      cy.login();
      cy.url().should("contain", "data");
      cy.get(".CookiesPopup > button").contains("OK").click();
      cy.wait(1000);
    });
  });

  beforeEach("Go to Data Page", () => {
    cy.visit("/data");
    // Opens Filter Sidebar on Analytics
    cy.openFilters();
  });

  it("Click Demand Space Tab", () => {
    cy.get(".root_level > :nth-child(2) > a")
      .should("contain", "Demand Space")
      .click();

    cy.get('[data-reset-point="false"] > .bg-white > .WidgetContainer');
    cy.get(".WidgetHeader__title")
      .contains("Demand Spaces Overview")
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("254");
  });

  //Applying Filters
  it("Add Filters", () => {
    //Navigate Back to Demand Space Tab
    cy.get(".root_level > :nth-child(2) > a")
      .should("contain", "Demand Space")
      .click();
    const filters = cy.get(".SidebarWrapper-container > :nth-child(1)");

    //Add Country Filter
    let selectFilter = filters.get(".Select");
    cy.get(
      ".SidebarWrapper--filters > .SidebarWrapper-container > :nth-child(1) > .Noncollapsable-item > .pb2 > :nth-child(1) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("United States").click();

    //Add Age Group Filter (Select All)
    cy.get(":nth-child(3) > .Collapsable-button > .Collapsable-arrow").click();
    cy.get(
      ":nth-child(3) > .px2 > .pb2 > :nth-child(1) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("Select all").click();

    //Add Age Group Filter (Deselect All)
    cy.get(
      ":nth-child(3) > .px2 > .pb2 > :nth-child(1) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("Deselect all").click();

    //Add Age Group Filter (1)
    cy.get(
      ":nth-child(3) > .px2 > .pb2 > :nth-child(1) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("18-24").click();

    //Add Age Group Filter (2)
    cy.get(
      ":nth-child(3) > .px2 > .pb2 > :nth-child(1) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("25-34").click();
  });
});
