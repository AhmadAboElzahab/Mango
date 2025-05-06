import type { SVGProps } from 'react';
const SvgMarkdown = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M0 4.147C0 3.514.514 3 1.15 3h13.7c.635 0 1.15.51 1.15 1.147v7.706c0 .633-.514 1.147-1.15 1.147H1.15C.516 13 0 12.49 0 11.853zm2.308 6.51h1.538V7.608l1.539 1.954 1.538-1.954v3.047h1.539V5.344H6.923L5.385 7.297 3.846 5.344H2.308zm9.615 0 2.308-2.579h-1.539V5.344h-1.538v2.734H9.615l2.308 2.578Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgMarkdown;
