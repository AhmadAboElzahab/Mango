import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FormField, TabsResponse,UserTab } from 'types/tabs'; // Adjust path if needed

import { httpClient } from './api.service';

// ----------- Fetch tabs -------------
export async function fetchTabs(model: string): Promise<TabsResponse<FormField, UserTab>> {
  const response = await httpClient.get(`/api/tabs?model=${model}`);
  console.log('fetchTabs', response.data);
  return response.data;
}

export function useTabs(model: string) {
  return useQuery<TabsResponse<FormField, UserTab>>({
    queryKey: ['tabs', model],
    queryFn: () => fetchTabs(model),
  });
}

// ----------- Create tab -------------
export async function createTab(model: string, tabData: Partial<UserTab>): Promise<UserTab> {
  const response = await httpClient.post(`/api/tabs`, { model, ...tabData });
  return response.data;
}

export function useCreateTab(model: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tabData: Partial<UserTab>) => createTab(model, tabData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tabs', model] });
    },
  });
}

// ----------- Update tab -------------
export async function updateTab(tabId: number, updates: Partial<UserTab>): Promise<UserTab> {
  const response = await httpClient.put(`/api/tabs/${tabId}`, updates);
  return response.data;
}

export function useUpdateTab(model: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ tabId, updates }: { tabId: number; updates: Partial<UserTab> }) =>
      updateTab(tabId, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tabs', model] });
    },
  });
}

// ----------- Delete tab -------------
export async function deleteTab(tabId: number): Promise<{ success: boolean }> {
  const response = await httpClient.delete(`/api/tabs/${tabId}`);
  return response.data;
}

export function useDeleteTab(model: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tabId: number) => deleteTab(tabId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tabs', model] });
    },
  });
}
