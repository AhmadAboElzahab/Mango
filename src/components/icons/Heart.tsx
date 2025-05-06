import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M7.296 13.985a.986.986 0 0 0 1.407.001S10.9 11.826 13 9.2c2-2.502 2.5-5.502 0-7.002-2.497-1.498-5 1-5 1s-2.502-2.499-5-1c-2.5 1.5-2 4.5 0 7.002a61 61 0 0 0 4.296 4.785'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgHeart;
