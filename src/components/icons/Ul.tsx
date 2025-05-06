import type { SVGProps } from 'react';
const SvgUl = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M6.44 3c0-.552.457-1 1.005-1h6.05a1 1 0 1 1 0 2h-6.05A1 1 0 0 1 6.44 3m0 5c0-.552.457-1 1.005-1h6.05a1 1 0 1 1 0 2h-6.05A1 1 0 0 1 6.44 8m0 5c0-.552.457-1 1.005-1h6.05a1 1 0 1 1 0 2h-6.05a1 1 0 0 1-1.005-1M3.5 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUl;
