import type { SVGProps } from 'react';
const SvgCount = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M11 2a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98C11.451 3 11 2.556 11 2m0 6a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98C11.451 9 11 8.556 11 8m0 3a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98c-.558 0-1.01-.444-1.01-1m0-6a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98C11.451 6 11 5.556 11 5m0 9a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2h-1.98c-.558 0-1.01-.444-1.01-1m-9.83-1.555L4.8 8 1.17 3.555A1 1 0 0 1 2.002 2h6a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0H3.87l2.964 3.445a1 1 0 0 1 0 1.11L3.87 12h3.132a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-.832-1.555'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCount;
