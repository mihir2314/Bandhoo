/// <reference types = "Cypress"/>
import homePage from "../Integration/pageObject/link"

const object = new homePage()
describe('Bandhoo', function(){
  before(function(){
    object.visitLink() 
  })
  it('Login',function() {
    cy.fixture('example').then(function(data1){
      data1.forEach(function(data1){
        let OTP = data1.number % 1000000;
        object.Number().type(data1.number)
        object.pin().clear().type(OTP) 
        object.login().click()
        object.username().should('contain.text',data1.name)      
      })
    })
  })
})



 