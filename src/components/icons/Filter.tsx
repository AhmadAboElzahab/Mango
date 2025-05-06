import type { SVGProps } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      d='M5.5 12.5c0-.552.444-1 1-1h3c.552 0 1 .444 1 1 0 .552-.444 1-1 1h-3c-.552 0-1-.444-1-1m-2-4c0-.552.446-1 .998-1h7.004c.551 0 .998.444.998 1 0 .552-.446 1-.998 1H4.498a.996.996 0 0 1-.998-1M1 4c0-.828.675-1.5 1.498-1.5h11.004C14.329 2.5 15 3.166 15 4c0 .828-.675 1.5-1.498 1.5H2.498A1.495 1.495 0 0 1 1 4'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgFilter;
