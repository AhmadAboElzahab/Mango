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
        <div style={{ position: 'relative' }}>
          <button onClick={() => setOpen(true)}>Open Popup</button>
          <Popup isOpen={open} onClose={() => setOpen(false)}>
            <div>
              <p>This is a reusable popup.</p>
            </div>
          </Popup>
        </div>
      </>
    );
  },
};
