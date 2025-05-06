import type { SVGProps } from 'react';
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M4 7.506C4 6.674 4.668 6 5.505 6h4.99C11.326 6 12 6.676 12 7.506v5.497A1.993 1.993 0 0 1 10.002 15H5.998A2 2 0 0 1 4 13.003zM11 3H5V1.5c0-.275.225-.5.5-.5h5c.275 0 .5.225.5.5zM3 4c0-.552.456-1 .995-1h8.01c.55 0 .995.444.995 1 0 .552-.456 1-.995 1h-8.01A.995.995 0 0 1 3 4m3-1h4V2H6z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgTrash;
