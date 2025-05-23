import { useSearch } from '@tanstack/react-router';

export function useValidatedPageQuery<T extends { page?: number } = { page?: number }>() {
  const search = useSearch<T>({});
  const page = search.page ?? 1;
  return { page: Math.max(0, page - 1) };
}
