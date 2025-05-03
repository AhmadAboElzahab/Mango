import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  createMemoryHistory,
} from '@tanstack/react-router';

// Create route tree
const rootRoute = createRootRoute();

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Header Links={[{ to: '/', label: 'Home' }]} />,
});

const routeTree = rootRoute.addChildren([storyRoute]);

const router = createRouter({
  routeTree,
  history: createMemoryHistory(),
});

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
  decorators: [() => <RouterProvider router={router} />],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    Links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
    ],
  },
};
