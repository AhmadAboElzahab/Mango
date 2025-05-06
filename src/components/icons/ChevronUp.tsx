import type { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M4.707 10.7a1 1 0 1 1-1.414-1.413l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L8 7.408z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChevronUp;
