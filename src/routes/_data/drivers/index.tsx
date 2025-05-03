import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_data/drivers/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Driver</div>;
}
