import {
  RouteIds,
  RegisteredRouter,
  SearchParamOptions,
  getRouteApi,
} from '@tanstack/react-router';
import { cleanEmptyParams } from 'utils/cleanEmptyParams';

export function useFilters<
  TId extends RouteIds<RegisteredRouter['routeTree']>,
  TSearchParams extends SearchParamOptions<RegisteredRouter, TId, TId>['search'],
>(routeId: TId) {
  const routeApi = getRouteApi<TId>(routeId);
  if (!routeApi) {
    throw new Error(`Route API not found for routeId: ${routeId}`);
  }
  console.log('useFilters', routeId);
  const navigate = routeApi.useNavigate();
  const filters = routeApi.useSearch();

  const setFilters = (partial: Partial<TSearchParams>) => {
    navigate({
      search: cleanEmptyParams({ ...filters, ...partial }) as TSearchParams,
      replace: true,
    });
  };

  const resetFilters = () => navigate({ search: {} as TSearchParams });

  return { filters, setFilters, resetFilters };
}
