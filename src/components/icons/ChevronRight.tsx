import type { SVGProps } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M5.148 4.524a1.04 1.04 0 0 1 1.47-1.47l4.211 4.211a1.04 1.04 0 0 1 0 1.47l-4.21 4.21a1.04 1.04 0 0 1-1.47-1.47L8.624 8z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChevronRight;
