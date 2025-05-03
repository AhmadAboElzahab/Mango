import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#8a3d76' },
        { name: 'light', value: '#fff' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
  },
};

export default preview;
