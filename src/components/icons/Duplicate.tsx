import type { SVGProps } from 'react';
const SvgDuplicate = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M5 3.997C5 2.894 5.896 2 6.997 2h5.006C13.106 2 14 2.896 14 3.997v5.006A2 2 0 0 1 12.003 11H6.997A2 2 0 0 1 5 9.003zm-3 8.006V5.998a.999.999 0 1 1 2 .005v4.495C4 11.328 4.672 12 5.502 12h4.495A.994.994 0 0 1 11 13c0 .556-.447 1-.998 1H3.997A2 2 0 0 1 2 12.003'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgDuplicate;
