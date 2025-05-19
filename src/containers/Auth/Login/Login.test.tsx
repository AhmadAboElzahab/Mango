import { render, screen } from '@testing-library/react';

import Login from './Login';

describe('Login', () => {
  it('should render without crashing', () => {
    render(<Login />);
    expect(screen.getByText(/works/i)).toBeInTheDocument();
  });
});
