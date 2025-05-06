import type { SVGProps } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='m13 8 .295.295c.389.389.705 1.152.705 1.704v1.002a1 1 0 0 1-1.002.999H3.002A1.005 1.005 0 0 1 2 11.001V9.999c0-.556.316-1.315.705-1.704L3 8V6.984a4.98 4.98 0 0 1 4.02-4.885C7.017 2.065 7 2.035 7 2c0-.55.45-1 1-1s1 .45 1 1c0 .035-.017.065-.02.099A5 5 0 0 1 13 7zm-3 5a2 2 0 0 1-4 0z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgBell;
