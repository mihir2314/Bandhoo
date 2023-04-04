class homePage
{
    visitLink(){
    return cy.visit('https://test.bandhoo.com')
    }
    Number(){
        return cy.get('#mobile')
    }
    pin(){
        return cy.get('#pin')
    }
    login(){
        return cy.get('#enter > .mdl-button__ripple-container')
    }
    username(){
        return cy.get('#_userName')
    }
}

export default homePage;