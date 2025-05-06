import type { SVGProps } from 'react';
const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path
      fill='#333'
      fillRule='evenodd'
      d='M8.59 2.324c-.326-.448-.853-.45-1.18 0L4.59 6.2c-.326.448-.146.812.41.812h1v4.994c0 1.108.887 2.006 2 2.006 1.104 0 2-.887 2-2.006V7.013h1c.552 0 .737-.361.41-.812z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUp;
