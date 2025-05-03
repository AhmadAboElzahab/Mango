import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_data/maids/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Maids</div>;
}
