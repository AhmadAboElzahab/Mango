import type { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M10 2h4c.556 0 1 .448 1 1 0 .556-.448 1-1 1h-4zm0 7H1.998A1 1 0 0 1 1 8c0-.556.447-1 .998-1H10zM1.999 2H4v2H1.999A.997.997 0 0 1 1 3c0-.556.447-1 .999-1M7 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 7 1m6 5a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 6M3 11a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 11m3 3v-2h8.002c.551 0 .998.444.998 1 0 .552-.446 1-.998 1z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSettings;
