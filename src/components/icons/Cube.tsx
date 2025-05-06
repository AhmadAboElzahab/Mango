import type { SVGProps } from 'react';
const SvgCube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='m2.947 4.71 4.83-2.415a.5.5 0 0 1 .447 0l4.829 2.415a.25.25 0 0 1 0 .447l-4.83 2.415a.5.5 0 0 1-.447 0L2.947 5.157a.25.25 0 0 1 0-.447M2.5 6.442a.25.25 0 0 1 .364-.223l4.313 2.2a.5.5 0 0 1 .273.445v4.644a.25.25 0 0 1-.358.225L2.784 11.67a.5.5 0 0 1-.284-.45V6.441Zm11 0v4.777a.5.5 0 0 1-.284.45l-4.308 2.064a.25.25 0 0 1-.358-.225V8.864a.5.5 0 0 1 .273-.445l4.313-2.2a.25.25 0 0 1 .364.223'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCube;
