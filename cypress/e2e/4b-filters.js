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
    //Opens Filter Sidebar on Analytics
    cy.get(".DashboardHeader__Actions > :nth-child(1)").first().click();
  });

  //filter side close
  it("verify filters sidebar close when clicked", () => {
    cy.get(".SidebarWrapper--filters .SidebarWrapper-header button").click();
    cy.wait(500);
  });

  //Apply criteria for Age Group
  it("apply the criteria to filter (Age Group)", () => {
    const filters = cy
      .get(".SidebarWrapper-container")
      .contains(".FilterItem > div:first-child", "Month");

    let selectFilter = filters.get(".Select");
    selectFilter.first().click();
    selectFilter.get(".Select-option").contains("United States").click();
    cy.wait(1000);
    cy.get("button.FilterButton span:nth-child(2)").should("be.visible");
  });
});
