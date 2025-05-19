import { z } from 'zod';
export const pageSearchSchema = z.object({
  page: z
    .union([z.string(), z.number()])
    .optional()
    .transform((v): number => {
      const raw = typeof v === 'string' ? parseInt(v, 10) : v;
      const page = typeof raw === 'number' && !isNaN(raw) ? raw : 1;
      return page;
    }),
});
