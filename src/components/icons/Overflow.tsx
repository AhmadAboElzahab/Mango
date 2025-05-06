import type { SVGProps } from 'react';
const SvgOverflow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M3 6a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 6m5 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 6m5 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 6'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgOverflow;
