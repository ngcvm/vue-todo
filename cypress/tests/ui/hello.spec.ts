describe("Hello Cypress here!", () => {
  it("Should load correct environment variables", () => {
    const baseUrl = Cypress.env("baseUrl");
    expect(baseUrl).to.be.a("string");
    expect(baseUrl).to.equal("http://localhost:3000");
  });
});
