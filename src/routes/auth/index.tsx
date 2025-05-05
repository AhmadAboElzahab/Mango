// routes/auth/_layout.tsx or similar
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/')({
  beforeLoad: () => {
    throw redirect({ to: '/auth/login' });
  },
});
