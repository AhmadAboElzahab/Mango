import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_data/nanies/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Nanies</div>;
}
