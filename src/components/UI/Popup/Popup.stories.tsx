import { useState } from 'react';
import { Popup } from './Popup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popup> = {
  title: 'UI/Popup',
  component: Popup,
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open Popup</button>
        <Popup isOpen={open} onClose={() => setOpen(false)}>
          <h3>Hello</h3>
          <p>This is a popup.</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </Popup>
      </>
    );
  },
};
