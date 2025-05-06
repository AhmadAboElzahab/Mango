import { createFileRoute } from '@tanstack/react-router';
import { Icon } from 'components/icons/Icon';
import TabsBar from 'components/UI/TabsBar';
import Toolbar from 'components/UI/Toolbar';

export const Route = createFileRoute('/_data/maids/')({
  component: RouteComponent,
  loader: () => {},
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
        maids <Icon name='Android' width={32} height={32} fill='green' />
      </div>
    </div>
  );
}
