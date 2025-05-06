import type { SVGProps } from 'react';
const SvgGantt = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M3 2h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m2 3h7a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2M4 8h4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m2 3h7a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgGantt;
