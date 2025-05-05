import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import HeaderContainer from '../../containers/HeaderContainer';
import { useAuthStore } from 'store/auth.store';

export const Route = createFileRoute('/_data')({
  loader: () => {},
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (!user?.token) {
      throw redirect({ to: '/auth/login' });
    }
  },
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />

      <div
        style={{
          backgroundColor: '#893C75',
          height: '100%',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
