import { Outlet, createFileRoute, Link } from '@tanstack/react-router';
import Header from '../../components/UI/Header';
import HeaderContainer from '../../containers/HeaderContainer';

export const Route = createFileRoute('/_data')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div>
      <HeaderContainer />
      <Outlet />
    </div>
  );
}
