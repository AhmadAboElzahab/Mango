import { createFileRoute } from '@tanstack/react-router';
import DataContainer from 'containers/Main/DataContainer';
import { queryClient } from 'core/services/clients/queryClient';
import { fetchTabs, useTabs } from 'core/services/tabs.service';
import { useFilters } from 'hooks/useFilters';

export const Route = createFileRoute('/_data/maids/')({
  loader: () => {
    // Fire and forget — starts the fetch during navigation without blocking it
    queryClient.prefetchQuery({
      queryKey: ['tabs', 'Maid'],
      queryFn: () => fetchTabs('Maid'),
      staleTime: 5 * 60 * 1000,
    });
  },
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
