import type { SVGProps } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M8 5.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334M9 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0zM8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgInfo;
