import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useAuthStore } from 'store/auth.store';

export const Route = createFileRoute('/auth')({
  loader: () => {},
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user?.token) {
      throw redirect({ to: '/' });
    }
  },
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return <Outlet />;
}
