import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header.jsx';

describe('Header', () => {
  it('opens mobile nav and updates ARIA attributes when hamburger clicked', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: /toggle navigation menu/i });
    const mobileNav = document.getElementById('mobile-nav');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(mobileNav).not.toHaveClass('open');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(mobileNav).toHaveClass('open');
  });
});
