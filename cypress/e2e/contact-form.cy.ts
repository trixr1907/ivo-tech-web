/**
 * @description Testsuite für das Kontaktformular
 */
describe('Kontaktformular', () => {
  beforeEach(() => {
    // Besuche die Kontaktseite vor jedem Test
    cy.visit('/contact')
  })

  /**
   * @description Testet die Formularvalidierung
   */
  it('sollte das Formular validieren', () => {
    // Test: Leeres Formular
    // Erwartung: Fehlermeldung für Namensfeld wird angezeigt
    cy.get('button[type="submit"]').click()
    cy.contains('Name muss mindestens 2 Zeichen lang sein')

    // Test: Ungültiges E-Mail-Format
    // Erwartung: Fehlermeldung für ungültige E-Mail wird angezeigt
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('invalid-email')
    cy.get('button[type="submit"]').click()
    cy.contains('Bitte geben Sie eine gültige E-Mail-Adresse ein')

    // Test: Zu kurze Nachricht
    // Erwartung: Fehlermeldung für Mindestlänge der Nachricht wird angezeigt
    cy.get('input[name="email"]').clear().type('test@example.com')
    cy.get('textarea[name="message"]').type('Hi')
    cy.get('button[type="submit"]').click()
    cy.contains('Nachricht muss mindestens 10 Zeichen lang sein')
  })

  /**
   * @description Testet erfolgreiche Formularübermittlung
   */
  it('sollte das Formular erfolgreich absenden', () => {
    // Formular mit gültigen Daten ausfüllen
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('textarea[name="message"]').type('Dies ist eine Testnachricht mit mehr als 10 Zeichen.')
    cy.get('button[type="submit"]').click()

    // Erwartung: Erfolgsmeldung wird angezeigt
    cy.contains('Nachricht erfolgreich gesendet')
  })
})
