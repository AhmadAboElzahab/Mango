import { z } from 'zod';

export const pageSearchSchema = z.object({
  search: z.string().optional(),
  pageSize: z.coerce.number().int().positive().optional(),
  pageIndex: z.coerce.number().int().min(0).optional(),
});
