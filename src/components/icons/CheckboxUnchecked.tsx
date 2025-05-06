import type { SVGProps } from 'react';
const SvgCheckboxUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M0 3.01A3.003 3.003 0 0 1 3.01 0h9.98A3.003 3.003 0 0 1 16 3.01v9.98A3.003 3.003 0 0 1 12.99 16H3.01A3.003 3.003 0 0 1 0 12.99zm1-.004v9.988C1 14.103 1.898 15 3.006 15h9.988A2.005 2.005 0 0 0 15 12.994V3.006A2.005 2.005 0 0 0 12.994 1H3.006A2.005 2.005 0 0 0 1 3.006'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheckboxUnchecked;
