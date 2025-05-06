import type { SVGProps } from 'react';
const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8.403 14.127a.5.5 0 0 1-.806 0Q3.5 8.554 3.5 6.169c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5q0 2.385-4.097 7.958M8 8.169a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMapPin;
