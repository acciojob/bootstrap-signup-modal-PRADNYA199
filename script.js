// describe('Signup Modal', () => {
//   it('should display the modal when the "Sign Up" button is clicked and hide when the close button is clicked', () => {
//     // Visit the page
//     cy.visit('http://localhost:3000');

//     // Click the "Sign Up" button
//     cy.get('button').contains('Sign Up').click();

//     // Check that the modal is visible
//     cy.get('#signupModal').should('be.visible');
// // Click the close button
// cy.get('.close').click();

// // Check that the modal is not visible
// cy.get('.modal').should('not.be.visible').then(() => {}, {timeout: 10000}); // Wait for 10 seconds
//     });
// });
it('tests modal functionality', () => {
  cy.get('button').first().click();
  cy.get('.modal').should('be.visible');
  cy.get('.close').click();
  cy.get('.modal').should('not.be.visible');
});