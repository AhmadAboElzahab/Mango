import { useQuery } from '@tanstack/react-query';
import { httpClient } from './api.service';

export interface IndexQueryParams {
  tab_id: number;
  model: string;
  filters: Record<string, any>;
  search_term: string;
  columns: any;
}

export async function getModelIndex(params: IndexQueryParams) {
  const response = await httpClient.post(`/api/${params.model}/index`, params);
  return response.data;
}

export function useModelIndex(params: IndexQueryParams) {
  return useQuery({
    queryKey: ['modelIndex', params.model, params.filters, params.search_term, params.columns],
    queryFn: () => getModelIndex(params),
    enabled: !!params.model && params.columns.length > 0,
    placeholderData: (previousData) => previousData,
  });
}
