import type { SVGProps } from 'react';
const SvgToggle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M12 10.667a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334M12 4H4C1.8 4 0 5.8 0 8s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgToggle;
