/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should showcase error if information is missing", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("title");
    cy.get("[data-cy='accomplishment-input']").type("input");
    cy.get(".Accomplishment-btn").click();
    cy.get(".Accomplishment-error-container").should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("title");
    cy.get("[data-cy='accomplishment-input']").type("input");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get(".Accomplishment-btn").click();
    cy.contains("This Accomplisment was Successfully Submitted").should("be.visible");
  })

  it("should go back to accomplishments dashboard with empty inputs when 'Go Back' button is clicked", () => {
    cy.get("[data-cy='accomplishment-title-input']").type("title");
    cy.get("[data-cy='accomplishment-input']").type("input");
    cy.get("[data-cy='accomplishment-checkbox']").check();
    cy.get(".Accomplishment-btn").click();
    cy.contains("button", "Go Back").click();
    cy.contains("h2", "Accomplishment").should("be.visible");
    cy.get("[data-cy='accomplishment-title-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-input']").should("have.value", "");
    cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked");
  })
});
