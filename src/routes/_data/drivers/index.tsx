import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_data/drivers/')({
  component: RouteComponent,
  loader: () => {
    console.log('Loading driver data');
  },
});

function RouteComponent() {
  return <div>driver</div>;
}
