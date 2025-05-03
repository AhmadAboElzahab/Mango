import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

import Header from '../../components/UI/Header';
import HeaderContainer from '../../containers/HeaderContainer';

export const Route = createFileRoute('/_data')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HeaderContainer />

      <div
        style={{
          backgroundColor: 'white',
          height: '400px',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
