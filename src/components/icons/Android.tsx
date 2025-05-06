import type { SVGProps } from 'react';
const SvgAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M9 12H7v2c0 .552-.444 1-1 1-.552 0-1-.454-1-1v-2.024L4.997 12A1 1 0 0 1 4 11.01V6h8v5.01c0 .546-.453.99-.997.99H11v2c0 .552-.444 1-1 1-.552 0-1-.454-1-1v-2.024zm4-2.605V7.002A1 1 0 0 1 14 6c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1-.552 0-1-.454-1-1zm-1-4.442H4C4 2.77 5.79 1 8 1s4 1.77 4 3.953M1 9.395V7.002A1 1 0 0 1 2 6c.552 0 1 .444 1 1v3c0 .552-.444 1-1 1-.552 0-1-.454-1-1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgAndroid;
