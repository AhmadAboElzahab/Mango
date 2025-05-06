import type { SVGProps } from 'react';
const SvgIndent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path d='M1 7.487c0-.5.4-1 1-1h12c.5 0 1 .4 1 1 0 .5-.4 1-1 1H2c-.5 0-1-.4-1-1m1-6c-.5 0-1 .4-1 1 0 .5.4 1 1 1h12c.5 0 1-.4 1-1 0-.5-.4-1-1-1zm2.9 12.5v-.5H2c-.5 0-1-.4-1-1 0-.5.4-1 1-1h2.9v-.3c0-.4.4-.6.8-.4l1.9 1.3c.4.3.4.8 0 1.1l-1.9 1.3c-.4.1-.8-.1-.8-.5m4.9-2.4c-.5 0-1 .4-1 1 0 .5.4 1 1 1H14c.5 0 1-.4 1-1 0-.5-.4-1-1-1z' />
  </svg>
);
export default SvgIndent;
