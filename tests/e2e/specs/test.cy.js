describe('visit', () => {
  it('visits the popover place', () => {
    cy.visit('https://mantine.dev/core/popover/')
    // for (let i = 0; i < 20; i++) {
    //   cy.contains('Toggle popover').click()
    //   cy.get('p').contains('This is uncontrolled popover').should('be.visible')
    //   cy.contains('Usage').click()
    // }
  })
})
