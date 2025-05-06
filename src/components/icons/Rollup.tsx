import type { SVGProps } from 'react';
const SvgRollup = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M6 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8m4-14a6 6 0 0 1 4.992 9.328c-.763 1.142-4.392 4.724-5.406 5.482a6 6 0 0 1-8.331-8.481c.753-.971 4.135-4.367 5.139-5.124A5.97 5.97 0 0 1 10 0M8 10a2 2 0 1 0-3.999-.001A2 2 0 0 0 8 10'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgRollup;
