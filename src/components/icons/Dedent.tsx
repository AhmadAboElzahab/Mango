import type { SVGProps } from 'react';
const SvgDedent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      d='M9.85 11.51c-.5 0-1 .4-1 1 0 .5.4 1 1 1h4.2c.5 0 1-.4 1-1 0-.5-.4-1-1-1zm-8.8-4.1c0-.5.4-1 1-1h12c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-12c-.5 0-1-.4-1-1m1-6c-.5 0-1 .4-1 1 0 .5.4 1 1 1h12c.5 0 1-.4 1-1 0-.5-.4-1-1-1zm1.9 9.7v.5h2.9c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-2.9v.5c0 .4-.4.6-.8.4l-1.9-1.3c-.4-.3-.4-.8 0-1.1l1.9-1.3c.4-.3.8-.1.8.3'
    />
  </svg>
);
export default SvgDedent;
