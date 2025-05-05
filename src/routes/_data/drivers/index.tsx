import { createFileRoute } from '@tanstack/react-router';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';

export const Route = createFileRoute('/_data/drivers/')({
  component: RouteComponent,
  loader: () => {
    console.log('Loading driver data');
  },
});
function RouteComponent() {
  return (
    <div
      style={{
        height: '100%', // optional, as parent has already defined it
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TabsBar />
      <Toolbar />
      <div
        style={{
          backgroundColor: '#FBFBFB',
          flex: 1, // fills the remaining space
        }}
      >
        driver
      </div>
    </div>
  );
}
