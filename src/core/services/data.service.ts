import { useInfiniteQuery } from '@tanstack/react-query';

import { httpClient } from './api.service';

export interface IndexQueryParams {
  tab_id: number;
  model: string;
  filters: Record<string, any>;
  search_term: string;
  columns: any;
}

const PAGE_SIZE = 50;

export function useInfiniteModelIndex(params: Omit<IndexQueryParams, 'page' | 'size'>) {
  return useInfiniteQuery({
    queryKey: [
      'modelIndex',
      params.model,
      params.tab_id,
      params.filters,
      params.search_term,
      params.columns,
    ],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await httpClient.post(`/api/${params.model}/index`, {
        ...params,
        page: pageParam,
        size: PAGE_SIZE,
      });

      return {
        data: response.data.data,
        meta: response.data.meta,
      };
    },
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce((acc, p) => acc + p.data.length, 0);
      return loadedCount < lastPage.meta.totalRowCount ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });
}
