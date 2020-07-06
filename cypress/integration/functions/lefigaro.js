const BASE_URL = 'https://lefigaro.fr'
const ACCOUNT_FORM_USERNAME = '#username'
const ACCOUNT_FORM_MDP = '#password'
const ACCOUNT_FORM_BUTTON = 'Je me connecte'

class Figaro {

    static getHomePage() 
    {
        return BASE_URL;
    }

    static AccountLogin(email,pwd) 
    {
        cy.get(ACCOUNT_FORM_USERNAME)
          .type(email)
        cy.get(ACCOUNT_FORM_MDP)
          .type(pwd)
        cy.contains(ACCOUNT_FORM_BUTTON)
          .click()
    }

    static clickContains(text) 
    {
        cy.contains(text)
          .click();
    }
}

export default Figaro;
