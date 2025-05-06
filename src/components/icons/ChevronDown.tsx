import type { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M11.293 5.287A1 1 0 0 1 12.707 6.7l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 8.58z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChevronDown;
