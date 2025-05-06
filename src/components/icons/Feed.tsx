import type { SVGProps } from 'react';
const SvgFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M3.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m6.5-1.5a1 1 0 1 1-2 0A4.5 4.5 0 0 0 3.5 8a1 1 0 0 1 0-2 6.5 6.5 0 0 1 6.5 6.5m4 0a1 1 0 0 1-2 0A8.5 8.5 0 0 0 3.5 4a1 1 0 0 1 0-2C9.299 2 14 6.701 14 12.5'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFeed;
