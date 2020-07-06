import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Figaro from './functions/lefigaro';

Given(`I am on a desktop device`, () => {});

When(`I visit home page`, () => {
  cy.visit(Figaro.getHomePage()).debug();
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
});

When(`I click {string}`, (text) => {
  Figaro.clickContains(text);
});

When(`I login with {string} and {string}`, (email, pwd) => {
  Figaro.AccountLogin(email, pwd);
});
