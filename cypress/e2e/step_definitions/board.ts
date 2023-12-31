import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {
  cy.visit("/");
});

When("I type in {string} and submit", (boardname) => {
  cy.get("[data-cy=first-board]").type(`${boardname}{enter}`);
});

Then("I should be redirected to the board detail", () => {
  cy.location("pathname").should('match', /\/board\/\d/);
});
