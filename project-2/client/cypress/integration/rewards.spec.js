/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });

  it("should display a list of rewards", () => {
    // cy.visit("/rewards");
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });

  // mock json file to test api endpoint
  it("should display a list of rewards with mock", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      // a file in cypress/fixture folder
      fixture: "rewards.json",
    });

    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });
});
