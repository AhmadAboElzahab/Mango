import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { httpClient } from './api.service';

export interface IndexQueryParams {
  tab_id: number;
  model: string;
  filters: Record<string, any>;
  search_term: string;
  columns: any;
  page: number;
  size: number;
}
export const PAGE_SIZE = 50;
export function usePaginatedModelIndex(params: Omit<IndexQueryParams, 'size'>) {
  return useQuery({
    queryKey: [
      'modelIndex',
      params.model,
      params.tab_id,
      params.page,
      JSON.stringify(params.filters ?? {}),
      params.search_term ?? '',
      JSON.stringify(params.columns ?? []),
    ],
    queryFn: async () => {
      const response = await httpClient.post(`/api/${params.model}/index`, {
        ...params,
        size: PAGE_SIZE,
      });

      return {
        data: response.data.data,
        meta: response.data.meta,
      };
    },
    // placeholderData: keepPreviousData,
  });
}
