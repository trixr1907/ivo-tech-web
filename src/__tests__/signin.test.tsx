import { render, screen } from '@testing-library/react';
import SignIn from '../app/auth/signin/page';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

/**
 * @description Testsuite für die Anmeldeseite
 */
describe('Anmeldeseite', () => {
  /**
   * @description Prüft, ob der GitHub-Anmelde-Button korrekt gerendert wird
   * @erwartung Der Button mit dem Text "Mit GitHub anmelden" sollte sichtbar sein
   */
  it('zeigt den Anmelde-Button an', () => {
    render(<SignIn />);
    expect(screen.getByText(/Mit GitHub anmelden/i)).toBeInTheDocument();
  });
});
