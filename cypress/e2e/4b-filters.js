describe("Analytics Filters", function () {
  beforeEach("Login", () => {
    cy.session("Save Session", () => {
      cy.login();
      cy.url().should("contain", "/login");
      cy.get(".CookiesPopup > button").contains("OK").click();
      cy.wait(1000);
    });
  });

  beforeEach("Go to Data Page", () => {
    cy.visit("/data");
    // Opens Filter Sidebar on Analytics
    cy.openFilters();
  });

  it("Widget Sample Size (No Filtering)", () => {
    cy.get('[data-reset-point="true"] > .bg-white > .WidgetContainer');
    cy.get(".WidgetHeader__title")
      .contains(
        "Which of the following are most important to you in your life right now?"
      )
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("4334");
  });

  //Apply Month Filter Criteria
  it("Add Filters", () => {
    const filters = cy
      .get(".SidebarWrapper-container")

    //Add first Month Filter
    let selectFilter = filters.get(".Select");
    cy.get(
      ".SidebarWrapper--filters > .SidebarWrapper-container > :nth-child(1) > .Noncollapsable-item > .pb2 > :nth-child(4) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("August/2022 (4668)").click();

    //Validate Sample Size after adding Month Filter (1)
    cy.get(".WidgetHeader__title")
      .contains(
        "Which of the following are most important to you in your life right now?"
      )
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("495");

    //Add second Month Filter
    cy.get(
      ".SidebarWrapper--filters > .SidebarWrapper-container > :nth-child(1) > .Noncollapsable-item > .pb2 > :nth-child(4) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter
      .get(".Select-option")
      .contains("September/2022 (2482)")
      .click();

    //Validate Sample Size after adding Month Filter (2)
    cy.get('[data-reset-point="true"] > .bg-white > .WidgetContainer');
    cy.get(".WidgetHeader__title")
      .contains(
        "Which of the following are most important to you in your life right now?"
      )
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("751");

    //Validate that both Month Filters have bee nadded and are visible
    cy.wait(1000);
    cy.get("button.FilterButton span:nth-child(2)")
      .contains("August/2022")
      .should("be.visible");
    cy.get("button.FilterButton span:nth-child(2)")
      .contains("September/2022")
      .should("be.visible");

    //Clear Filters
    cy.get(
      ".SidebarWrapper--filters > .SidebarWrapper-container > :nth-child(1) > .clearfix > .btn"
    )
      .contains("Clear Filters")
      .click();

    cy.wait(1000);
    cy.get(".WidgetHeader__title")
      .contains(
        "Which of the following are most important to you in your life right now?"
      )
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("4334");

    cy.closeFilters();
  });
});
