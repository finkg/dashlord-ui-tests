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
    cy.get(".DashboardHeader__Actions > :nth-child(1)").first().click();
    cy.get(".SidebarWrapper--filters > .SidebarWrapper-header > .btn").should(
      "be.visible"
    );
  });

  //Closes Filter Sidebar
  it("Close Opened Filter Sidebar", () => {
    cy.get(".SidebarWrapper--filters .SidebarWrapper-header button").click();
    cy.get('.SidebarWrapper--filters > .SidebarWrapper-header > .btn').should("not.be.visible")
    cy.wait(500);
  });

  //Apply Country Filter Criteria
  //   it("Apply Country Filter", () => {
  //     const filters = cy
  //       .get(".SidebarWrapper-container")
  //       .contains(".FilterItem > div:first-child", "COUNTRY");

  //     let selectFilter = filters.get(".Select");
  //     selectFilter.first().click();
  //     selectFilter.get(".Select-option").contains("United States").click();
  //     cy.wait(1000);
  //     cy.get("button.FilterButton span:nth-child(2)").should("be.visible");
  //   });
  // });

  it("Widget Sample Size (No Filtering)", () => {
    cy.get('[data-reset-point="true"] > .bg-white > .WidgetContainer');
    cy.get(".WidgetHeader__title")
      .contains(
        "Which of the following are most important to you in your life right now?"
      )
      .should("be.visible");
    cy.get(".WidgetHeader__sampleSize").contains("3866");
  });

  //Apply Month Filter Criteria
  it("Apply Month Filtering", () => {
    const filters = cy
      .get(".SidebarWrapper-container")
      .contains(".FilterItem > div:nth-child(1)", "Month");

    //Add first Month Filter
    let selectFilter = filters.get(".Select");
    cy.get(
      ".SidebarWrapper--filters > .SidebarWrapper-container > :nth-child(1) > .Noncollapsable-item > .pb2 > :nth-child(4) > .Select > .Select-control > .Select-arrow-zone"
    ).click();
    selectFilter.get(".Select-option").contains("August/2022 (4668)").click();

    //Validate Sample Size after adding Month Filter (1)
    cy.get('[data-reset-point="true"] > .bg-white > .WidgetContainer');
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
      .contains("September/2022 (2422)")
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
  });
});
