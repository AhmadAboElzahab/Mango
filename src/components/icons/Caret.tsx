import type { SVGProps } from 'react';
const SvgCaret = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M4.802 5h6.396c.66 0 1.036.77.64 1.309L8.64 10.672a.788.788 0 0 1-1.279 0l-3.2-4.363C3.766 5.769 4.142 5 4.801 5Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCaret;
