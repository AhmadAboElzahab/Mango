import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_data/drivers/')({
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
      {/* TODO: wire up real data */}
      {/* <TabsBar tabs={[]} activeTab={...} onTabChange={...} /> */}
      {/* <Toolbar columns={[]} onToggleColumn={() => {}} onSearch={() => {}} searchValue="" setFilters={() => {}} /> */}
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
