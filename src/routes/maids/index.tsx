import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/maids/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/data/maids/"!</div>;
}
