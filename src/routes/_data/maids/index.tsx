import { createFileRoute } from '@tanstack/react-router';
import DataContainer from 'containers/Main/DataContainer';
import { queryClient } from 'core/services/clients/queryClient';
import { fetchTabs, useTabs } from 'core/services/tabs.service';
import { useFilters } from 'hooks/useFilters';

export const Route = createFileRoute('/_data/maids/')({
  loader: () =>
    queryClient.ensureQueryData({
      queryKey: ['tabs', 'Maid'],
      queryFn: () => fetchTabs('Maid'),
    }),
  component: RouteComponent,
  // validateSearch: (search) => pageSearchSchema.parse(search),
});

function RouteComponent() {
  const { data, isLoading, error } = useTabs('Maid');
  const { filters, setFilters } = useFilters(Route.id);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading tabs</div>;
  return <DataContainer filters={filters} setFilters={setFilters} model='maids' tabsData={data} />;
}
