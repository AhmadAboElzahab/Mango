import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M2 12c0-.552.456-1 1.002-1h9.995a.999.999 0 1 1 0 2H3.003A1 1 0 0 1 2 12m0-4c0-.552.456-1 1.002-1h9.995a.999.999 0 1 1 0 2H3.003A1 1 0 0 1 2 8m0-4c0-.552.456-1 1.002-1h9.995a.999.999 0 1 1 0 2H3.003A1 1 0 0 1 2 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMenu;
