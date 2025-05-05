import Header from '../components/UI/Header';

import { useAuth } from 'hooks/useAuth';

export default function HeaderContainer() {
  const { logout } = useAuth();
  return (
    <div>
      <Header
        Links={[
          { to: '/drivers', label: 'drivers' },
          { to: '/maids', label: 'maids' },
          { to: '/nanies', label: 'nanies' },
        ]}
        onLogout={() => {
          logout();
        }}
      />
    </div>
  );
}
