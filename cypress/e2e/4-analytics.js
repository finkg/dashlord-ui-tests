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
    cy.screenshot()
  });

  // after(() => {
  //     cy.logout()
  // });

  context("Tabs", () => {
    it("Verify Tabs", () => {
      var header = [
        "Hot Topics",
        "Demand Space",
        "Category Development",
        "Brands",
        "A. Column",
        "B. Stacked",
        "C. Pie Chart",
        "D. Heatmaps",
        "E. Line Charts",
        "F. Text Widget",
        "G. Analytics & Images",
        "H. Table",
        "I. Maps",
        "J. Interactivity",
      ];
      cy.get("li.level-0").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(1000);
      });
    });

    it("Verify Subtabs of Hot Topics", () => {
      var header = [
        "Future of Work",
        "Activities & Socialising",
        "Spending & Saving - Financial Wellbeing",
        "E-commerce & Retail",
        "Health & Wellbeing",
        "Sustainability",
        "Digital natives",
        "Consumer context (category level)",
        "Makeup",
        "Skincare",
        "Personal Care",
      ];
      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
    it("Verify Subtabs of Demand Space", () => {
      var header = [
        "Overview",
        "What",
        "Cooking & Preparation",
        "Why",
        "Context",
        "Who",
        "Comparison",
      ];

      cy.get("li.level-0:nth-child(2) > a").click();
      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
    it("Verify Subtabs of Category Development", () => {
      var header = ["Category Competitive Landscape", "Category Choices"];

      cy.get("li.level-0:nth-child(3) > a").click();
      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
    it("Verify Subtabs of Brands", () => {
      var header = ["Brand Landscape", "Brand Choices", "Brand Sourcing"];

      cy.get("li.level-0:nth-child(4) > a").click();
      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
    //subtabs for A.Column
    it("Verify Subtabs of A.Column", () => {
      var header = [
        "AA. No Weights",
        "AA. No Weights Data2",
        "AB. Weights",
        "AC. Options",
        "ACB. Calculations",
        "ACC. Calculations - data3",
        "AD. Grouping",
        "AE. Group Percentages",
        "AE. Index",
      ];
      cy.get("li.level-0:nth-child(5) > a").click();
      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for B. Stacked
    it("Verify Subtabs of B. Stacked", () => {
      var header = [
        "BA. No Weights",
        "BB. Weights",
        "BC. Options",
        "BD. Options 2",
        "BE. Widget Condition",
      ];

      cy.get("li.level-0:nth-child(6) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for C. Pie Chart
    it("Verify Subtabs of C. Pie Chart", () => {
      var header = ["CA. No Weights", "CB. Weights"];

      cy.get("li.level-0:nth-child(7) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for D. Heatmaps
    it("Verify Subtabs of D. Heatmaps", () => {
      var header = ["DA. No Weights", "DB. Weights", "DC. Indexes"];

      cy.get("li.level-0:nth-child(8) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for E. Line Charts
    it("Verify Subtabs of E. Line Charts", () => {
      var header = ["EA. No Weights", "EB. Timelines"];

      cy.get("li.level-0:nth-child(9) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for F. Text Widget
    it("Verify Subtabs of F. Text Widget", () => {
      var header = [
        "FA. Classic",
        "FB. Markdown",
        "FC. Markdown Advanced",
        "FD. Wordcloud & Verbatim",
        "FE. Video Widget",
        "FF. List",
      ];

      cy.get("li.level-0:nth-child(10) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for G. Analytics & Images
    it("Verify Subtabs of G. Analytics & Images", () => {
      var header = ["GA. No Weights", "GB. Weights"];

      cy.get("li.level-0:nth-child(11) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    it("Verify Subtabs of H. Table", () => {
      cy.get("li.level-0:nth-child(12) > a").click();

      cy.wait(500);
    });

    //subtabs for I. Maps
    it("Verify Subtabs of I. Maps", () => {
      var header = ["IA. Maps", "IB. World Map", "HB. table 2"];

      cy.get("li.level-0:nth-child(13) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });

    //subtabs for J. Interactivity
    it("Verify Subtabs of J. Interactivity", () => {
      var header = ["JA. Interactivity", "JB. Photos", "JC. Controllers"];

      cy.get("li.level-0:nth-child(14) > a").click();

      cy.get("li.level-1").each(($li, i) => {
        cy.wrap($li).should("be.visible").and("contain", header[i]).click();
        cy.wait(500);
      });
    });
  });
});
