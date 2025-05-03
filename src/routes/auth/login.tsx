import { createFileRoute } from '@tanstack/react-router';
import LoginContainer from '../../containers/Auth/Login';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginContainer />
    </div>
  );
}
