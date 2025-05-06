import type { SVGProps } from 'react';
const SvgShapes = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M7.926 11.445a3.463 3.463 0 1 1-6.926 0 3.463 3.463 0 0 1 6.926 0M9 13.417V8.4c0-.263.22-.49.491-.49h5.018c.263 0 .491.219.491.49v5.018c0 .263-.22.491-.49.491H9.49a.496.496 0 0 1-.49-.49ZM4.571 6.908c-.278 0-.387-.202-.252-.437l3.003-5.2c.14-.242.369-.236.504 0l3.003 5.2c.14.242.019.437-.252.437z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgShapes;
