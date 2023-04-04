/// <reference types = "Cypress"/>
import homePage from "../Integration/pageObject/link"

const object = new homePage()
describe('Bandhoo', function(){
  before(function(){
    object.visitLink() 
  })

  it('Login',function() {
    cy.fixture('example').then(function(jsonData){
      jsonData.forEach(function(jsonData){
        cy.log(jsonData.name)
      })
    })

  })
})



