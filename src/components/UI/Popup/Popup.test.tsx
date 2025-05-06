import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Popup } from './Popup';

describe('Popup', () => {
  it('should render when open', () => {
    render(
      <Popup isOpen onClose={() => {}}>
        Hello
      </Popup>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should call onClose when clicking outside', () => {
    const onClose = vi.fn();
    render(
      <>
        <div data-testid='outside'>Outside</div>
        <Popup isOpen onClose={onClose}>
          Content
        </Popup>
      </>,
    );

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(onClose).toHaveBeenCalled();
  });
});
