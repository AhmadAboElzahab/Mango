import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import ColumnsManagment from './ColumnsManagment';
import '@testing-library/jest-dom';

const mockColumns = [
  { field_key: 'name', visible: true, locked: false, order: 0, width: 100 },
  { field_key: 'email', visible: false, locked: false, order: 1, width: 150 },
];

describe('ColumnsManagment', () => {
  it('renders the trigger label and icon', () => {
    render(<ColumnsManagment columns={mockColumns} onToggleColumn={vi.fn()} />);
    expect(screen.getByText('Columns')).toBeInTheDocument();
  });

  it('opens the popup on click', () => {
    render(<ColumnsManagment columns={mockColumns} onToggleColumn={vi.fn()} />);
    fireEvent.click(screen.getByText('Columns'));
    expect(screen.getByText('Manage Columns')).toBeInTheDocument();
  });

  it('renders column checkboxes', () => {
    render(<ColumnsManagment columns={mockColumns} onToggleColumn={vi.fn()} />);
    fireEvent.click(screen.getByText('Columns'));
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
  });

  it('calls onToggleColumn when checkbox is clicked', () => {
    const onToggleColumn = vi.fn();
    render(<ColumnsManagment columns={mockColumns} onToggleColumn={onToggleColumn} />);
    fireEvent.click(screen.getByText('Columns'));

    const nameCheckbox = screen.getByLabelText('name');
    fireEvent.click(nameCheckbox);

    expect(onToggleColumn).toHaveBeenCalledWith('name');
  });
});
