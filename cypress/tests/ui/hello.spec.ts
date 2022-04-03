describe("Hello Cypress here!", () => {
  it("Should load correct environment variables", () => {
    const appTitle = Cypress.env("appTitle");
    expect(appTitle).to.be.a("string");
    expect(appTitle).to.equal("Todo App (Test)");
  });
});
