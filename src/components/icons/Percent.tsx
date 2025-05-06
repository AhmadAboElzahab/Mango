import type { SVGProps } from 'react';
const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M3 14.25a1.25 1.25 0 0 1-.884-2.134l10-10a1.25 1.25 0 0 1 1.768 1.768l-10 10A1.25 1.25 0 0 1 3 14.25m12-2.05a2.8 2.8 0 1 1-5.601-.001A2.8 2.8 0 0 1 15 12.2M6.6 3.8a2.8 2.8 0 1 1-5.601-.001A2.8 2.8 0 0 1 6.6 3.8'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPercent;
