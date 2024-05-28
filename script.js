describe('Signup Modal', () => {
  it('should display the modal when the "Sign Up" button is clicked and hide when the close button is clicked', () => {
    // Visit the page
    cy.visit('http://localhost:3000');

    // Click the first button (Sign Up button)
    cy.get('button').first().click();

    // Check that the modal is visible
    cy.get('#signupModal').should('be.visible');

    // Click the close button
    cy.get('.close').click();

    // Check that the modal is not visible
    cy.get('#signupModal').should('not.be.visible');
	  cy.get('.close').click();
cy.wait(500); // Wait for 500ms
cy.get('#signupModal').should('not.be.visible');
  });
});