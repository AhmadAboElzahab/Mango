import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  createMemoryHistory,
} from '@tanstack/react-router';

const rootRoute = createRootRoute();

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
  decorators: [
    (Story, context) => {
      const StoryComponent = () => <Story {...context} />;

      const storyRoute = createRoute({
        getParentRoute: () => rootRoute,
        path: '/',
        component: StoryComponent,
      });

      const routeTree = rootRoute.addChildren([storyRoute]);

      const router = createRouter({
        routeTree,
        history: createMemoryHistory(),
      });

      return <RouterProvider router={router} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    Links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
  },
};
