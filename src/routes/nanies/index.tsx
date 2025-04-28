import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/nanies/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/data/nanies/"!</div>;
}
