it('loads examples', () => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
  cy.contains('cypress-typescript-custom-commands app is running!');
  cy.customCommand('testing');
});
