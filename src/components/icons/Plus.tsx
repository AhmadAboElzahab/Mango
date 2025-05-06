import type { SVGProps } from 'react';
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M9 7V3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V7H3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H7v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgPlus;
