describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })

  it('should validate the form', () => {
    // Test empty submission
    cy.get('button[type="submit"]').click()
    cy.contains('Name muss mindestens 2 Zeichen lang sein')

    // Test invalid email
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('invalid-email')
    cy.get('button[type="submit"]').click()
    cy.contains('Bitte geben Sie eine gültige E-Mail-Adresse ein')

    // Test short message
    cy.get('input[name="email"]').clear().type('test@example.com')
    cy.get('textarea[name="message"]').type('Hi')
    cy.get('button[type="submit"]').click()
    cy.contains('Nachricht muss mindestens 10 Zeichen lang sein')
  })

  it('should submit the form successfully', () => {
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('textarea[name="message"]').type('This is a test message with more than 10 characters.')
    cy.get('button[type="submit"]').click()
    cy.contains('Nachricht erfolgreich gesendet')
  })
})
