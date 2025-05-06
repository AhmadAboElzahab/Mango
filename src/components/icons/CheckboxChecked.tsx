import type { SVGProps } from 'react';
const SvgCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M0 3.01A3.003 3.003 0 0 1 3.01 0h9.98A3.003 3.003 0 0 1 16 3.01v9.98A3.004 3.004 0 0 1 12.99 16H3.01A3 3 0 0 1 0 12.99zm1-.004v9.988C1 14.103 1.898 15 3.006 15h9.988A2.006 2.006 0 0 0 15 12.994V3.006A2.007 2.007 0 0 0 12.994 1H3.006A2.005 2.005 0 0 0 1 3.006m4.944 9.299-2.266-2.199A1.473 1.473 0 0 1 3.66 8a1.42 1.42 0 0 1 2.075.05l.587.641a.465.465 0 0 0 .685.01l3.544-3.676A1.47 1.47 0 0 1 12.661 5c.59.59.58 1.533-.012 2.115l-5.272 5.181a1.03 1.03 0 0 1-1.433.009'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCheckboxChecked;
