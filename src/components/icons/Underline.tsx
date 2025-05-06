import type { SVGProps } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path d='M3.75 7.7V2.2c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v5.4c0 .6.2 1.1.5 1.4s.8.5 1.5.5 1.2-.2 1.5-.5.5-.8.5-1.4V2.2c.1-.6.6-1.1 1.2-1.1s1.1.5 1.1 1.1v5.5c0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.1-3.1 1.1s-2.3-.4-3.1-1.1c-.7-.7-1.1-1.6-1.1-2.8m1 5.2h6.5c.6 0 1 .4 1 1s-.4 1-1 1h-6.5c-.6 0-1-.4-1-1s.4-1 1-1' />
  </svg>
);
export default SvgUnderline;
