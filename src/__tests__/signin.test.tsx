import { render, screen } from '@testing-library/react';
import SignIn from '../app/auth/signin/page';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('SignIn Page', () => {
  it('renders sign in button', () => {
    render(<SignIn />);
    expect(screen.getByText(/Mit GitHub anmelden/i)).toBeInTheDocument();
  });
});
