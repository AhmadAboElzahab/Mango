import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useAuthStore } from 'store/auth.store';

import HeaderContainer from '../../containers/HeaderContainer';

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
          height: '80%',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
