describe("Linux academy", () => {
  it("Should be accessible from the internet", () => {
    cy.visit("https://linuxacademy.com/");
  });

  it("Should conform to a11y accessibility rules", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Should contain 'Hands-On Labs'", () => {
    cy.contains("Hands-On Labs");
  });

  it("Should show 'Popular Hands-On Labs'", () => {
    cy.get("button.toggle--nav").click();
    cy.contains("Popular Hands-On Labs");
  });

  it("Should have option to 'Learn by platform'", () => {
    cy.contains("Learn by platform");
  });

  it("Should have option to 'Learn by skill'", () => {
    cy.contains("Learn by skill");
  });
});
