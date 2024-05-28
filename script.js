describe('Signup Modal', () => {
  it('should display the modal when the "Sign Up" button is clicked and hide when the close button is clicked', () => {
    // Visit the page
    cy.visit('http://localhost:3000');

    // Click the "Sign Up" button
    cy.get('button').contains('Sign Up').click();

    // Check that the modal is visible
    cy.get('#signupModal').should('be.visible');

    // Click the close button and debug
cy.get('#signupModal .close').click().debug();

// Check that the modal is not visible
cy.get('#signupModal').should('not.be.visible');
  });
});
