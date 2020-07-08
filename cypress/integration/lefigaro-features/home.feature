Feature: Le Figaro Connect

  Background:
    Given I am on a desktop device

  @focus
  Scenario: figaro end to end
    When I visit home page
    Then I see 'Le Figaro' in the title
    When I click 'Se connecter'
    Then I see 'Connexion' in the title
    When I login with 'yhelali@lefigao.fr' and 'cypress-tests'