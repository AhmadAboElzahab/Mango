import type { SVGProps } from 'react';
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 2C4.692 2 2 4.692 2 8s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6m3.01 4.814c.177-.012.38.007.58.085.408.16.66.517.66 1.072 0 .748-.31 1.134-.837 1.224a2 2 0 0 1-.381.024H8.03c-.69 0-1.25-.56-1.25-1.246L6.75 4c0-.804.281-1.25 1.28-1.25.749 0 1.125.31 1.203.841.016.107.019.19.017.352v2.873h1.738l.021-.002Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTime;
