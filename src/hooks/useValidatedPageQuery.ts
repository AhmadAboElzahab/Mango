import { useRouter } from '@tanstack/react-router';
import { pageSearchSchema } from 'schemas/querySchema';

export const useValidatedPageQuery = () => {
  const router = useRouter();
  const search = router.state.location.search;

  const result = pageSearchSchema.safeParse(search);
  if (!result.success) {
    return { page: 1, isValid: false, errors: result.error.format() };
  }

  return { page: result.data.page, isValid: true, errors: null };
};
