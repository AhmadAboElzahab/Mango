import { createFileRoute } from '@tanstack/react-router';

import LoginContainer from '../../containers/Auth/Login';
import { useAuthStore } from 'store/auth.store';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      {user && <p>{user.token}</p>}
      <LoginContainer />
    </div>
  );
}
